import {EmailModel} from "../models/email.model";

export const emailMock: EmailModel[] = [
  {
    from: "aaa@example.com",
    to: "zzz.zzz@example.com",
    subject: "[ HR-888 ] Notice of official announcement",
    date: new Date('2020-07-23T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut."
  },
  {
    from: "bbb@example.com",
    to: ["yyiuuady@zzz.com", "yyy.zzz@com"],
    subject: "[web:333] Web Contact",
    date: new Date('2020-07-25T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "ccc@example.com",
    to: "zxxxzz.xxx@example.com",
    subject: "Happy New Year! Greetings for the New Year.",
    date: new Date('2020-07-21T03:24:00'),
    body: "lLorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.e"
  },
  {
    from: "bza@example.com",
    to: "zxxxzz@example.com",
    subject: "[HR-887(Revised: Office Expansion Project Team)] Notice of that this message is overflowed because of its length",
    date: new Date('2019-07-21T03:24:00'),
    body: "lLorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut."
  },
  {
    from: "bbac@example.com",
    to: ["contact@me", "yyy.zzz@com", "yyy.zzz@com", "vvv.zzz@com"],
    subject: "Web Contact",
    date: new Date('2020-07-22T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "valera@example.com",
    to: ["ggasdfg.zzz"],
    subject: "[Github] Brush-up on loading animation",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "gogo@example.com",
    to: ["kfo@zzz"],
    subject: "I love you",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
  },
  {
    from: "bbac@example.com",
    to: ["mailexample@com", "yyy.zzz@com", "yyy.zzz@com", "vvv.zzz@com"],
    subject: "Web Contact",
    date: new Date('2020-07-22T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "valera@example.com",
    to: ["ggasdfg.zzz"],
    subject: "[Github] Brush-up on loading animation",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "gogo@example.com",
    to: ["kfo@zzz"],
    subject: "I love you",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
  },
  {
    from: "bbac@example.com",
    to: ["mymail@example", "yyy.zzz@com", "yyy.zzz@com", "vvv.zzz@com"],
    subject: "Web Contact",
    date: new Date('2020-07-22T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "valera@example.com",
    to: ["ggasdfg.zzz"],
    subject: "[Github] Brush-up on loading animation",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "gogo@example.com",
    to: ["kfo@zzz"],
    subject: "I love you",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
  },
  {
    from: "bbac@example.com",
    to: ["gogogo@zzz.c", "yyy.zzz@com", "yyy.zzz@com", "vvv.zzz@com"],
    subject: "Web Contact",
    date: new Date('2020-07-22T03:24:00'),
    body: "aLorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "valera@example.com",
    to: ["ggasdfg.zzz"],
    subject: "[Github] Brush-up on loading animation",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
  {
    from: "gogo@example.com",
    to: ["kfo@zzz"],
    subject: "I love you",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
  },
  {
    from: "valera@example.com",
    to: ["ggasdfg.zzz"],
    subject: "[Github] Brush-up on loading animation",
    date: new Date('2020-07-19T03:24:00'),
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum earum odio vel. Aliquid asperiores dolore expedita explicabo laborum qui quibusdam, reprehenderit voluptatum? Assumenda hic iste possimus tempore ut.",
    attachment: true
  },
]
