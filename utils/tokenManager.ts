//Import tools
import jwt from 'jsonwebtoken';

//Generate token
export const generateToken = (uid: string) => {
    const expiresIn = 60 * 30;
    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET as string, {
            expiresIn,
        });
        return { token, expiresIn };
    } catch (error) {
        console.log(error);
    }
};

//Generate Refresh Token
export const generateRefreshToken = (uid: string) => {
    const expiresIn = 60 * 60 * 24 * 30;

    try {
        const refreshToken = jwt.sign(
            { uid },
            process.env.JWT_REFRESH as string,
            { expiresIn }
        );
        /* res.cookie('refreshToken', refreshToken, {
            sameSite: 'Lax',
            domain: 'luciadiaz.es',
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + expiresIn * 1000),
        }); */
        return refreshToken;
    } catch (error) {
        console.log(error);
    }
};
