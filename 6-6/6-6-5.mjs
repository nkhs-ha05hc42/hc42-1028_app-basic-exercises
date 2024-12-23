const objectArray1 = [
    {
    key: "A",
    value: "AAA",
    },
    {
    key: "B",
    value: "BBB",
    },
    {
    key: "C",
    value: "CCC"
    }
    ]
    const map6_6_5 = new Map(objectArray1.map(object => [object.key, object.value]))
    for (const [key, value] of map6_6_5) {
    console.log(key, value)
    }