const get8_1 = (req, res) => {
    res.send(
    JSON.stringify({
    code: req.quare.code,
    }),
    )
   }

   export const q8_1Controller = {
    get8_1,
   }
   