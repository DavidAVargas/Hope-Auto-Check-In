const bcrypt = require("bcrypt")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const { generateToken } = require("./auth")

const resolvers = {
    Query: {
        users: async () => await prisma.user.findMany(),
        user: async (_, { id }) => await prisma.user.findUnique({ where: { id }})
    },
    Mutation: {
        // ----- Create -----
        createUser: async (_, {userName, password_hash}) => {
            try{
                const hashedPassword = await bcrypt.hash(password_hash, 10)
                const user = await prisma.user.create({
                    data:{
                        userName,
                        password_hash: hashedPassword
                    }

                })
                const tokenPayload = {
                    id: user.id,
                    userName: user.userName,
                    role: user.role
                };
                const token = generateToken(tokenPayload)
                return { token, user }

            } catch (error) {
                console.log(error)
                throw new Error(`Failed to create user`)
            }
        },

        // ----- Update -----

        // ----- Delete -----
        deleteUser: async (_, { id }) => {
            return await prisma.post.delete({
              where: { id },
          })
        },

        // ----- Login ------
        loginUser: async (_, { userName, password }, { prisma }) => {
      const user = await prisma.user.findUnique({ where: { userName } });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const validPassword = await bcrypt.compare(password, user.password_hash);
      if (!validPassword) {
        throw new Error("Invalid email or password");
      }

      const tokenPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
        token,
        user,
      };
    },
        loginUser: async (_, {userName, password}) => {
            const user = await prisma.user.findUnique({ where: { userName }})
            if (!user){
              throw new Error("Invalid email or password")
            }

            const validPassword = await bcrypt.compare(password, user.password_hash)
            if(!validPassword){
                throw new Error("Invalid email or password")
            }

            const tokenPayload = {
                id: user.id,
                email: user.email,
                role: user.role,
            };
            const token = generateToken(tokenPayload)
            return { token, user }
        }
    }
}

module.exports = resolvers