
class User {
  constructor(id, name, login, password, bonus_card = false) {
    this.id = id;                // PK
    this.name = name;
    this.login = login;
    this.password = password;
    this.bonus_card = bonus_card;
  }
}

class Room {
  constructor(room_id, type, free_seats, with_bed = false) {
    this.room_id = room_id;      // PK
    this.type = type;
    this.free_seats = free_seats;
    this.with_bed = with_bed;
  }
}



class Movie {
  constructor(id, category, name, rate, oscar = false, release_date) {
    this.id = id;                // PK
    this.category = category;    // FK → categories.category
    this.name = name;
    this.rate = rate;
    this.oscar = oscar;
    this.release_date = release_date;
  }
}



class Order {
  constructor(session_id, date, ticket_id, movie_id, category, payment, user_id, room_id) {
    this.session_id = session_id;  // PK
    this.date = date;
    this.ticket_id = ticket_id;
    this.movie_id = movie_id;      // FK → movie.id
    this.category = category;      // FK → categories.category
    this.payment = payment;
    this.user_id = user_id;        // FK → user.id
    this.room_id = room_id;        // FK → room.room_id
  }
}

class FreeSeats {
  constructor(seat_id, room_id){
    this.seat_id = seat_id; //PK
    this.room_id = room_id; //PK
  }
}
