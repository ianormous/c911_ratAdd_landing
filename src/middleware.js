import { NextResponse, NextRequest } from 'next/server';
import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: process.env.REDIS_PORT
});
client.on('connect', function () {
    console.log('Connected to Redis');
});

client.on('error', function (err) {
    console.log('Redis Error:', err);
});

export async function middleware(req, res, next) {
    console.log('REACHES THE SUBISSION LIMITER')
    const clientIp = req.headers['x-real-ip'] || req.socket.remoteAddress;
    const key = `form-submissions:${clientIp}`;

    // Check if the client has exceeded the submission limit
    const count = await redisClient.get(key);
    if (count && parseInt(count) >= 10) {
        return res.status(429).json({ message: 'Too many submissions. Please try again later.' });
    }

    // Increment the submission count and set expiry time
    redisClient.multi()
        .incr(key)
        .expire(key, 60) // Expire in 1 minute
        .exec(() => {
            next();
        });
};

// export function sumbissionLimiter(request) {
//     console.log('you reached the test middleware');
// }

// export function test1middleware() {
//     // console.log(req.body.msg)
//     console.log('test 2 midware')
// }

// export function test2middleware() {
//     // console.log(req.body.msg)
//     console.log('test 2 midware')
// }

// export function middleware(request) {
//     console.log('reaches master middleware')
//     // console.log(req.body)
//     NextResponse.next()
// }

export const config = {
    matcher: ['/api/test1', '/api/contact']
}