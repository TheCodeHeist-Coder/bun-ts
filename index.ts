// 0 ?? null -> 0
// 0 || null -> null


// zod -> zod is a runtime type checker



//! Interfaces
//? -->  







import express from 'express'

const app = express();

app.use(express.json());

interface SignInput {
    username: string,
    password: string
}
app.post("/signup", (req, res) => {
    const body: SignInput = req.body; 
})


app.listen(3000, () => {
    console.log("Running , ok!")
})


//! Here if i put types using typescript then why we need zod for type validation???
//? --> Okk, so ts checks types only in compile time and the zod checks types in runtime.