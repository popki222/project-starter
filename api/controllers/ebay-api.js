const express = require("express");
const router = express.Router();

const axios = require('axios');

router.post("/", async (req, res) => {
  try {
    const staticBody = '<?xml version="1.0" encoding="utf-8"?>\n<GetItemRequest xmlns="urn:ebay:apis:eBLBaseComponents">\n\t<ErrorLanguage>en_US</ErrorLanguage>\n\t<WarningLevel>High</WarningLevel>\n<ItemID>134649850916</ItemID>\n</GetItemRequest>'


    const response = await axios.post('https://api.ebay.com/ws/api.dll', staticBody, {
      headers: {
        'Authorization': 'v^1.1#i^1#p^1#r^0#I^3#f^0#t^H4sIAAAAAAAAAN1YXWwUVRTe3f7Qyp/ESk0DuAz+IM3M3rszOzMd2JWlC3QD3VZ2W6CmktnZO+20szPLzN0uS4TUJiIh4aEkEiMkQnwgGhKjGF9KIGA0opKYKD/GBx+sWg0aEBSqAs5Ot2VbCTR0Yxr3ZTPnnnvu9333nHvPDOgtr1y2q2HX9dnOGa5DvaDX5XTCmaCyvKx2TomrpswBChych3qf6C3tKxlaYYpJNSVsQGZK10zk3pZUNVOwjX4ibWiCLpqKKWhiEpkCloRosHG94KWAkDJ0rEu6SrjDIT9BI1H00dAHEyKALA8tqzYaM6b7CS/DsZLMSbIkI8bH09a4aaZRWDOxqGFrHHhpEkIScjHICwwQAE9B3ttGuFuRYSq6ZrlQgAjYcAV7rlGA9d5QRdNEBraCEIFwcE20KRgOrY7EVngKYgXyOkSxiNPm+Kd6PYHcraKaRvdexrS9hWhakpBpEp7AyArjgwrBUTAPAN+WmkUJ3svUQRoyso9lfEWRco1uJEV8bxw5i5IgZdtVQBpWcPZ+ilpqxLuQhPNPEStEOOTO/T2XFlVFVpDhJ1avCm4ONjcTgZCoKSgqJsn6WDPZvCFEynycRSzLSyTL0F7aV8fn1xgJlFd4wiL1upZQcnqZ7oiOVyELMJooC10gi+XUpDUZQRnnwBT4ecGofBzfltvPkQ1M404tt6UoaWngth/vL/7YbIwNJZ7GaCzCxAFbHT8hplJKgpg4aKdhPnO2mX6iE+OU4PFkMhkqQ1O60eHxAgA9mxrXR6VOlBSJUd9crZvK/SeQik1FQtZMUxFwNmVh2WalqQVA6yACDO+DNJfXfTyswETrvwwFnD3ji6FYxRH3cVw8TickQENYB5liFEcgn5+eHA4UF7NkUjS6EU6pooRIycqzdBIZSkKgfbKX5mVEJtg6mWTqZJmM+xIsCWWEAELxuDSWv//3GplslkeRZCBcvDQvRoqrXEtnG7Opo2sjvR3g+u6YtjYJcQev9LAd4UbErld7oql1DdJqLeyfbCHclXy9qljKxKz1iytArtanKkKDbmKUmBK9qKSnULOuKlJ2em0wbSSaRQNno0hVLcOUSAZTqXARj+li0Jv8CfFglIt8M/33t9JdWZm5bJ1erHLzTSuAmFKo3L1DSXrSo4tWw5EzbbER2z38VHgrVqs6rVhbJEfYKomRHpOyKVNmj0QZyNTThtVeU025viumdyPNusqwoasqMlrhlEs5mUxjMa6i6VbTRUhwRZxm9yzkAPAyLAOmdhxJ9i26ZbodSUU8hUcNpfQk+mjP+Bf6gMP+wT7nadDnPOFyOsEK8CRcAhaXl7SUlsyqMRWMKEWUKVPp0Kz3VANR3SibEhXD9YjjOvjxgHSp4a093bcyW39YvsNR+D3hUDt4bOyLQmUJnFnweQEsuDNSBudWz/Za/TjkIM8AwLeBJXdGS+H80qrX/+z6jtgYn/9h+UDNu8epz2590LQUzB5zcjrLHKV9Tkf78asBsfHwH5dPX/hWPQouR/ZeOfj88M83sgD+dLG1qv/jldrChtd6ayt2Vj7L/zWwKIkXDLh+uXX24afb951cSlZ9uqPryxt0rPPoUObI3NCR80dbvz7gr4iWnekvWff+4Fev9NzgXna8EXtnUUW6M77oFFe19eKp27uv7/Q/9PY8bkZgP9t0smF7Ah27IL957JM9Tqr1ZhXjGo60kINDroHBit2DBxfWnNsc+XWH79Vz3JnDv4Uuzbg6FPv+4rW2rn38i47Hh26WReasbdtZ99H5p745sLv6yvCscPXf7cee+XzlvGXvveBr2bBcvFa7a61Grvx977pHTywevs3XvkRX93u/2N/ozZwd2ct/AMlX8hXpEQAA',
        'Content-Type': 'application/xml',
        'User-Agent': 'Your-User-Agent-Here',
        'X-EBAY-API-CALL-NAME': 'GetItem',
        'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
        'X-EBAY-API-IAF-TOKEN': 'v^1.1#i^1#p^1#r^0#I^3#f^0#t^H4sIAAAAAAAAAN1YXWwUVRTe3f7Qyp/ESk0DuAz+IM3M3rszOzMd2JWlC3QD3VZ2W6CmktnZO+20szPLzN0uS4TUJiIh4aEkEiMkQnwgGhKjGF9KIGA0opKYKD/GBx+sWg0aEBSqAs5Ot2VbCTR0Yxr3ZTPnnnvu9333nHvPDOgtr1y2q2HX9dnOGa5DvaDX5XTCmaCyvKx2TomrpswBChych3qf6C3tKxlaYYpJNSVsQGZK10zk3pZUNVOwjX4ibWiCLpqKKWhiEpkCloRosHG94KWAkDJ0rEu6SrjDIT9BI1H00dAHEyKALA8tqzYaM6b7CS/DsZLMSbIkI8bH09a4aaZRWDOxqGFrHHhpEkIScjHICwwQAE9B3ttGuFuRYSq6ZrlQgAjYcAV7rlGA9d5QRdNEBraCEIFwcE20KRgOrY7EVngKYgXyOkSxiNPm+Kd6PYHcraKaRvdexrS9hWhakpBpEp7AyArjgwrBUTAPAN+WmkUJ3svUQRoyso9lfEWRco1uJEV8bxw5i5IgZdtVQBpWcPZ+ilpqxLuQhPNPEStEOOTO/T2XFlVFVpDhJ1avCm4ONjcTgZCoKSgqJsn6WDPZvCFEynycRSzLSyTL0F7aV8fn1xgJlFd4wiL1upZQcnqZ7oiOVyELMJooC10gi+XUpDUZQRnnwBT4ecGofBzfltvPkQ1M404tt6UoaWngth/vL/7YbIwNJZ7GaCzCxAFbHT8hplJKgpg4aKdhPnO2mX6iE+OU4PFkMhkqQ1O60eHxAgA9mxrXR6VOlBSJUd9crZvK/SeQik1FQtZMUxFwNmVh2WalqQVA6yACDO+DNJfXfTyswETrvwwFnD3ji6FYxRH3cVw8TickQENYB5liFEcgn5+eHA4UF7NkUjS6EU6pooRIycqzdBIZSkKgfbKX5mVEJtg6mWTqZJmM+xIsCWWEAELxuDSWv//3GplslkeRZCBcvDQvRoqrXEtnG7Opo2sjvR3g+u6YtjYJcQev9LAd4UbErld7oql1DdJqLeyfbCHclXy9qljKxKz1iytArtanKkKDbmKUmBK9qKSnULOuKlJ2em0wbSSaRQNno0hVLcOUSAZTqXARj+li0Jv8CfFglIt8M/33t9JdWZm5bJ1erHLzTSuAmFKo3L1DSXrSo4tWw5EzbbER2z38VHgrVqs6rVhbJEfYKomRHpOyKVNmj0QZyNTThtVeU025viumdyPNusqwoasqMlrhlEs5mUxjMa6i6VbTRUhwRZxm9yzkAPAyLAOmdhxJ9i26ZbodSUU8hUcNpfQk+mjP+Bf6gMP+wT7nadDnPOFyOsEK8CRcAhaXl7SUlsyqMRWMKEWUKVPp0Kz3VANR3SibEhXD9YjjOvjxgHSp4a093bcyW39YvsNR+D3hUDt4bOyLQmUJnFnweQEsuDNSBudWz/Za/TjkIM8AwLeBJXdGS+H80qrX/+z6jtgYn/9h+UDNu8epz2590LQUzB5zcjrLHKV9Tkf78asBsfHwH5dPX/hWPQouR/ZeOfj88M83sgD+dLG1qv/jldrChtd6ayt2Vj7L/zWwKIkXDLh+uXX24afb951cSlZ9uqPryxt0rPPoUObI3NCR80dbvz7gr4iWnekvWff+4Fev9NzgXna8EXtnUUW6M77oFFe19eKp27uv7/Q/9PY8bkZgP9t0smF7Ah27IL957JM9Tqr1ZhXjGo60kINDroHBit2DBxfWnNsc+XWH79Vz3JnDv4Uuzbg6FPv+4rW2rn38i47Hh26WReasbdtZ99H5p745sLv6yvCscPXf7cee+XzlvGXvveBr2bBcvFa7a61Grvx977pHTywevs3XvkRX93u/2N/ozZwd2ct/AMlX8hXpEQAA',
        'X-EBAY-API-SITEID': '0',
      },
    });

    const xmlData = response.data;
    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
