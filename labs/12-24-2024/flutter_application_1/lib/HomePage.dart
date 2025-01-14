import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(20, 20, 40, 1),
      extendBodyBehindAppBar: true, // ขยายเนื้อหาให้เต็มหน้าจอ รวมพื้นที่ SafeArea
      appBar: AppBar(
        leading: Icon(Icons.movie),
        title: Text('Recommended Movies'),
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        elevation: 0, // ลบเงาของ AppBar
      ),
      body: Column(
        children: [
          // รูปภาพปก
          ClipRRect(
            borderRadius: BorderRadius.vertical(
              bottom: Radius.circular(32), // ขอบล่างโค้งมน
            ),
            child: Image.asset(
              'lib/assets/images/bpanther.jpg',
              fit: BoxFit.cover,
              width: double.infinity,
              height: MediaQuery.of(context).size.height * 0.5, // กำหนดเป็น 40% ของความสูงหน้าจอ
            ),
          ),
          SizedBox(height: 20),
          Container(
            padding: EdgeInsets.only(left: 30,right: 30),
            child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                children: [
                  Icon(Icons.star,color: Colors.amber,),
                  Text('8.2/10',style: TextStyle(color: Colors.white),),
                  Text('150,332',style: TextStyle(color: const Color.fromARGB(255, 88, 88, 88), fontSize: 10),),
                ],
              ),
              SizedBox(width:0,),
              Column(
                children: [
                  Icon(Icons.star_border,color: Colors.white,),
                  Text('Rate This',style: TextStyle(color: Colors.white),),
                  
                ],
              ),
              SizedBox(width: 0,),
              Column(
                children: [
                  Icon(Icons.movie_creation_rounded,color: Colors.green,),
                  Text('Metascore',style: TextStyle(color: Colors.white),),
                  Text('52 critic reviews',style: TextStyle(color: const Color.fromARGB(255, 88, 88, 88), fontSize: 10),),
                ],
              )
            ],
          ),
          ),
          SizedBox(height: 20,),
          Column(
                children: [
                  Text('Black Panther',style: TextStyle(color: Colors.white, fontSize: 36)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('2018',style: TextStyle(color: const Color.fromARGB(255, 114, 114, 114)),),
                      SizedBox(width: 10,),
                      Text('‧ Action/Sci-fi ‧',style: TextStyle(color: const Color.fromARGB(255, 114, 114, 114)),),
                      SizedBox(width: 10,),
                      Text('2h 15m',style: TextStyle(color: const Color.fromARGB(255, 114, 114, 114)),),
                    ],
                  ),
                ],
              ),
            SizedBox(height: 15,),
            Container(
              child: Text('เรื่องที่คุณอาจสนใจ',style: TextStyle(color: Colors.white),),
            ),
          // ListView
          Expanded(
            child: ListView(
              padding: EdgeInsets.all(16.0), // เพิ่ม padding รอบ ListView
              children: [
                ListTile(
                  textColor: Colors.white,
                  leading: ClipOval(
                    child: Image.asset(
                      'lib/assets/images/forrestg.jpg',
                      width: 50,
                      height: 50,
                      fit: BoxFit.cover,
                    ),
                  ),
                  title: Text('Forrest Gump'),
                  subtitle: Row(
                    children: [
                      Icon(Icons.star,color: Colors.amber, size: 14,),
                      SizedBox(width: 5,),
                      Text('9.2/10 ‧ Comedy/Romance ‧ 2h 22m',style: TextStyle(fontSize: 12,color: Color.fromARGB(255, 114, 114, 114),)),
                    ],
                  ),
                  trailing: Icon(Icons.arrow_forward),
                  onTap: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Clicked on เครือข่ายและอินเทอร์เน็ต')),
                    );
                  },
                ),
                Divider(),
                ListTile(
                  textColor: Colors.white,
                  leading: ClipOval(
                    child: Image.asset(
                      'lib/assets/images/inception.jpeg',
                      width: 50,
                      height: 50,
                      fit: BoxFit.cover,
                    ),
                  ),
                  title: Text('Inception'),
                  subtitle: Row(
                    children: [
                      Icon(Icons.star,color: Colors.amber, size: 14,),
                      SizedBox(width: 5,),
                      Text('8.8/10 ‧ Sci-fi/Action ‧ 2h 28m',style: TextStyle(fontSize: 12,color: Color.fromARGB(255, 114, 114, 114),)),
                    ],
                  ),
                  trailing: Icon(Icons.arrow_forward),
                  onTap: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Clicked on เครือข่ายและอินเทอร์เน็ต')),
                    );
                  },
                ),
                Divider(),
                ListTile(
                  textColor: Colors.white,
                  leading: ClipOval(
                    child: Image.asset(
                      'lib/assets/images/shawshank.jpg',
                      width: 50,
                      height: 50,
                      fit: BoxFit.cover,
                    ),
                  ),
                  title: Text('The Shawshank Redemption'),
                  subtitle: Row(
                    children: [
                      Icon(Icons.star,color: Colors.amber, size: 14,),
                      SizedBox(width: 5,),
                      Text('9.3/10 ‧ Thriller/Crime ‧ 2h 22m',style: TextStyle(fontSize: 12,color: Color.fromARGB(255, 114, 114, 114),)),
                    ],
                  ),
                  trailing: Icon(Icons.arrow_forward),
                  onTap: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(content: Text('Clicked on เครือข่ายและอินเทอร์เน็ต')),
                    );
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
