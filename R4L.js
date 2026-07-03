export const R4L = {
    name: "R4L",
    type: "abgang",
    echo: true,

    run(pxOut) {
        return {
            move: "R4L",
            action: "abgang",
            echo: true,
            role: pxOut.role,
            text: pxOut.text
        };
    }
};

