
class dataOrang {
  #nama;
  #umur;
  #alamat;
  constructor(nama, umur, alamat) {
    this.#nama = nama;
    this.#umur = umur;
    this.#alamat = alamat;
  }
  getBiodata() {
    return `Nama: ${this.#nama}, Umur: ${this.#umur}, Alamat: ${this.#alamat}`;
  }
}
class Murid extends dataOrang {
  #sekolah;
  #jurusan;
  constructor(nama, umur, alamat, sekolah, jurusan) {
    super(nama, umur, alamat);
    this.#sekolah = sekolah;
    this.#jurusan = jurusan;
  }
  getBiodata() {
    return `${super.getBiodata()}, Sekolah: ${this.#sekolah}, Jurusan: ${this.#jurusan}`;
  }
}
class Murid2 extends dataOrang {
  #subject;
  #sekolah;
  constructor(nama, umur, alamat, sekolah) {
    super(nama, umur, alamat);
    this.#sekolah = sekolah;
  }

  getBiodata() {
    return `${super.getBiodata()}, Sekolah: ${this.#sekolah}`;
  }
}
const dataOrangArray = [
  new Murid("Amanda Rizky Ramadhani",16, "Jakarta", "SMK Negeri 1 jakarta", "RPL"),
  new Murid2("Syakila Aprilia", 16, "Jakarta", "SMK Negeri 1 Jakarta"),
];
dataOrangArray.forEach((orang) => {
  console.log(orang.getBiodata());
});