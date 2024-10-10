# Giải Thích Phần Giới Thiệu

## Giới Thiệu

**Blockchain** là một công nghệ cơ sở dữ liệu phân tán, nổi bật với tính phi tập trung, tính toàn vẹn dữ liệu và khả năng truy xuất thông tin. Những đặc điểm này cho phép blockchain được áp dụng trong nhiều lĩnh vực khác nhau như **Internet of Things (IoT)**, **y tế**, và **chuỗi cung ứng**. Trong những năm gần đây, **tiền điện tử dựa trên blockchain** đã thu hút sự chú ý lớn từ giới học thuật, ngành công nghiệp và chính phủ nhờ tiềm năng phát triển cao.

**Tiền điện tử** là một phần thiết yếu của hệ thống blockchain. Bắt nguồn từ **Bitcoin**, nhiều loại tiền điện tử dựa trên blockchain khác như **Ethereum** và **ZCash** đã được phát triển. Sự phát triển này dẫn đến nhu cầu ngày càng tăng về **giao dịch giữa các chuỗi (cross-chain transactions)**, tức là việc trao đổi một loại tiền điện tử này sang loại khác. Tuy nhiên, trong khi việc trao đổi tiền tệ trong cùng một blockchain là dễ dàng, việc thực hiện điều này giữa các blockchain khác biệt lại gặp nhiều khó khăn. Để khắc phục thách thức này, công nghệ giao dịch giữa các chuỗi đã được phát triển, tạo ra các **cầu nối giữa các blockchain khác nhau** để thuận tiện cho việc trao đổi hoặc chuyển giao tiền điện tử. Công nghệ giao dịch giữa các chuỗi sử dụng các **giao thức tiêu chuẩn giữa các chuỗi** nhằm đảm bảo tính nguyên tử (atomicity), nhất quán (consistency) và khả năng tương tác (interoperability).

**Giao dịch tiền điện tử giữa các chuỗi** là quá trình người dùng trao đổi một loại tiền tệ này sang loại khác, thường liên quan đến nhiều giao dịch. Ví dụ, giả sử Alice muốn trao đổi **Bitcoin** lấy **Ether**. Cô ấy sẽ cần thực hiện ít nhất hai giao dịch: một giao dịch trên mạng Bitcoin để chuyển Bitcoin cho người dùng khác, và một giao dịch trên mạng Ethereum để nhận Ether từ người dùng khác.

Hầu hết các giao dịch giữa các chuỗi hiện nay dựa vào **sàn giao dịch tập trung**. Tuy nhiên, điều này cũng mang lại một số **rủi ro bảo mật**, vì các sàn giao dịch tập trung đòi hỏi sự tin tưởng từ người dùng, từ đó làm giảm tính phi tập trung của blockchain. Để giải quyết vấn đề này, một số **sơ đồ giao dịch giữa các chuỗi phi tập trung** đã được đề xuất. Các công nghệ giao dịch giữa các chuỗi hiện có cải thiện hiệu suất của các giao dịch giữa các chuỗi, nhưng hiếm khi xem xét vấn đề **bảo mật thông tin cá nhân**. 

Ví dụ:
- Các giải pháp dựa trên **notary** cho phép các **notary đáng tin cậy** truy cập vào số lượng và địa chỉ của các bên tham gia giao dịch giữa các chuỗi.
- Các **sơ đồ relay chain** yêu cầu lấy thông tin về các giao dịch giữa các chuỗi trên các blockchain khác nhau, điều này có thể làm giảm tính riêng tư của giao dịch nếu không có các biện pháp bảo mật thông tin phù hợp.
- **Hợp đồng khóa hợp thời (HTLCs)** yêu cầu nộp cùng một giá trị hàm băm, điều này cho phép bất kỳ bên thứ ba nào có thể quan sát thông tin trên cả hai blockchain để suy ra thông tin liên quan đến giao dịch giữa các chuỗi từ cùng một giá trị hàm băm.

Để **đảm bảo tính bảo mật của các giao dịch giữa các chuỗi**, cần ngăn chặn bất kỳ bên thứ ba nào truy cập vào thông tin giao dịch. Điều này bao gồm số lượng giao dịch và địa chỉ của các bên tham gia giao dịch. Nhiều blockchain bảo vệ sự ẩn danh đã được đề xuất, như **Monero** và **ZCash**. Những giải pháp này cho phép các bên tham gia ẩn số lượng giao dịch và làm mờ các liên kết giữa các giao dịch và người gửi cũng như người nhận tương ứng. Tuy nhiên, vẫn còn những thách thức bổ sung để đạt được **giao dịch giữa các chuỗi bảo mật thông tin cá nhân**. Để vượt qua những thách thức này, cần xem xét kỹ lưỡng toàn bộ quá trình giao dịch giữa các chuỗi. Đầu tiên, cần bảo vệ **thông tin giao dịch trong quá trình truyền giữa các chuỗi** và đạt được **tính không liên kết** của địa chỉ người dùng trên các chuỗi khác nhau.

# Kết Luận

Phần giới thiệu này nêu bật tầm quan trọng của công nghệ blockchain và các tiền điện tử trong việc thúc đẩy các giao dịch giữa các chuỗi. Nó cũng đề cập đến các thách thức về bảo mật và riêng tư mà các giao dịch giữa các chuỗi hiện tại đối mặt, đồng thời chỉ ra nhu cầu cấp bách trong việc phát triển các giải pháp bảo mật thông tin cá nhân hiệu quả hơn trong lĩnh vực này.

# References

1. Internet of Things (IoT)
2. Healthcare applications in blockchain
3. Supply chain management using blockchain
4. Bitcoin
5. Ethereum
6. ZCash
7. Cross-chain transaction bridges
8. Centralized exchanges
9. Decentralized cross-chain transaction schemes
10. Privacy-preserving cross-chain technologies
11. Notary-based solutions
12. Relay chain schemes
13. Hash Time-Locked Contracts (HTLCs)
14. Monero

# Bổ Sung

Nếu bạn có bất kỳ câu hỏi nào thêm hoặc cần giải thích chi tiết hơn về một phần cụ thể nào đó, đừng ngần ngại hỏi!

# Giải Thích Phần Liên Quan Đến Giao Dịch Tiền Điện Tử Giữa Các Chuỗi và Công Nghệ Bảo Vệ Quyền Riêng Tư

## 1. Tổng Quan Về Giao Dịch Tiền Điện Tử Giữa Các Chuỗi

### 1.1 Yêu Cầu Đối Với Giao Dịch Giữa Các Chuỗi

Để đảm bảo tính bảo mật và hiệu quả trong giao dịch tiền điện tử giữa các chuỗi, cần đáp ứng các yêu cầu sau:

- **Không phân biệt giao dịch giữa các chuỗi với các giao dịch thông thường trên blockchain:** Điều này đảm bảo rằng các giao dịch giữa các chuỗi không bị phát hiện là giao dịch đặc biệt, tăng cường tính bảo mật.
- **Đảm bảo tính nguyên tử và công bằng của giao dịch:** Mỗi bên tham gia giao dịch phải nhận được số tiền như mong đợi hoặc không bên nào nhận được tiền. Tính nguyên tử nghĩa là giao dịch phải thành công toàn bộ hoặc thất bại hoàn toàn.
- **Bảo mật thông tin giao dịch:** Thông tin về số lượng giao dịch và địa chỉ của các bên tham gia cần được bảo mật để ngăn chặn việc truy cập trái phép từ bên thứ ba.

### 1.2 Đề Xuất Sơ Đồ Chuyển Tiền Điện Tử Giữa Các Chuỗi Bảo Vệ Quyền Riêng Tư

Bài báo đề xuất một **sơ đồ chuyển tiền điện tử giữa các chuỗi bảo vệ quyền riêng tư**, với các điểm nổi bật sau:

- **Hỗ trợ hầu hết các loại tiền điện tử:** Sơ đồ này có thể áp dụng cho nhiều loại tiền điện tử khác nhau, đảm bảo tính linh hoạt và mở rộng.
- **Bảo vệ thông tin giao dịch của người gửi:** Các bên tham gia giao dịch không thể truy cập đầy đủ thông tin giao dịch của người gửi, bao gồm địa chỉ trên các blockchain khác nhau và số lượng đồng tiền tham gia giao dịch.
- **Giao thức khóa và giải phóng tiền điện tử bảo mật:** Sử dụng các trung gian để khóa và giải phóng tiền điện tử. Giao dịch được thực hiện ngoài chuỗi (off-chain) giữa người gửi và trung gian, sau đó cam kết thông tin giao dịch được gửi đến hợp đồng thông minh. Người gửi có thể mở các cam kết này để đảm bảo trung gian hoạt động đúng.
- **Chế độ giao dịch bảo mật dựa trên zk-SNARK:** Triển khai một sơ đồ giao dịch bảo mật cho tiền điện tử được ánh xạ (MCCT) dựa trên công nghệ zk-SNARK, và thiết kế một giao thức trao đổi nguyên tử giữa các loại tiền điện tử được ánh xạ khác nhau.
- **Phân tích tính bảo mật và đánh giá hiệu suất:** Đánh giá các đặc tính bảo mật của sơ đồ được đề xuất và triển khai hợp đồng thông minh trên mạng thử nghiệm Ethereum để kiểm tra chi phí chạy. Kết quả thử nghiệm cho thấy sơ đồ này đạt được giao dịch giữa các chuỗi bảo mật với chi phí thực tiễn.

### 1.3 Cấu Trúc Bài Báo

Bài báo được tổ chức như sau:

- **Phần 2:** Đánh giá các công trình liên quan hiện có.
- **Phần 3:** Cung cấp các kiến thức cơ bản cần thiết.
- **Phần 4:** Trình bày kiến trúc hệ thống và mô hình.
- **Phần 5 và 6:** Mô tả chi tiết về sơ đồ được đề xuất.
- **Phần 7:** Phân tích bảo mật của sơ đồ.
- **Phần 8:** Đánh giá hiệu suất của sơ đồ.
- **Phần 9:** Kết luận bài báo.

## 2. Công Trình Liên Quan

### 2.1. Sơ Đồ Giao Dịch Tiền Điện Tử Giữa Các Chuỗi

Các sơ đồ giao dịch tiền điện tử giữa các chuỗi hiện nay có thể được phân loại thành ba loại chính:

#### 2.1.1. Sơ Đồ Notary

- **Đặc điểm:** Sử dụng bên thứ ba đáng tin cậy làm trung gian, có thể là sàn giao dịch tập trung hoặc mạng lưới các nút phân tán.
- **Vai trò của trung gian:** Thu thập dữ liệu giao dịch giữa các chuỗi và xác minh các giao dịch.
- **Ưu điểm:** Dễ triển khai và sử dụng rộng rãi.
- **Nhược điểm:** Cần sự tin tưởng vào trung gian, làm suy yếu tính phi tập trung của blockchain.

#### 2.1.2. Sidechains (Chuỗi Bên) và Relays (Tiếp Anh)

- **Sidechains:**
  - **Định nghĩa:** Là các blockchain chạy song song với chuỗi chính, mỗi sidechain có bộ giao thức, cơ chế đồng thuận và hợp đồng thông minh riêng.
  - **Tính tương thích:** Cho phép chuyển tài sản giữa chuỗi chính và sidechains một cách dễ dàng.
  
- **Relays:**
  - **Định nghĩa:** Là các tích hợp và mở rộng của notary schemes và sidechains.
  - **Chức năng:** Xây dựng một blockchain kết nối với các chuỗi khác thông qua các giao thức thông điệp giữa các chuỗi.
  - **Lợi ích:** Tạo ra các giao thức cụ thể cho phép các blockchain tham gia giao dịch truyền dữ liệu trong cầu nối.

#### 2.1.3. HTLCs (Hợp Đồng Khóa Hợp Thời)

- **Định nghĩa:** Là một loại hợp đồng thông minh được thiết kế để tạo điều kiện cho các giao dịch giữa các chuỗi bằng cách khóa tiền trên một blockchain và giải phóng tiền trên blockchain khác.
- **Chức năng:** Cho phép hai bên tạo kênh thanh toán để trao đổi tài sản kỹ thuật số theo các điều kiện cụ thể.
- **Đảm bảo tính nguyên tử:** Ngăn chặn vấn đề double spending và đảm bảo tính nguyên tử của giao dịch thông qua các khoản thanh toán có điều kiện.

### 2.2. Công Nghệ Bảo Vệ Quyền Riêng Tư Trong Giao Dịch Giữa Các Chuỗi

#### Các Nghiên Cứu Liên Quan Đến Công Nghệ Bảo Vệ Quyền Riêng Tư

1. **Sơ Đồ Chuyển Tiền Bảo Vệ Quyền Riêng Tư Trên Cross-Edge Blockchain Network của Ma et al.[25]**
   - **Mã Hóa Toàn Phần Đồng Hình (Fully Homomorphic Encryption):** Giúp bảo vệ dữ liệu cross-chain bằng cách mã hóa hoàn toàn, cho phép xử lý dữ liệu mà không cần giải mã.
   - **Relay Chain Nodes:** Mỗi chuỗi ứng dụng được chia sẻ bí mật giữa các nút của relay chain, giúp các nút này có thể phục hồi khóa riêng đồng hình toàn phần khi cần audit, từ đó đảm bảo khả năng kiểm toán các giao dịch ẩn danh.
   - **Hạn Chế:** Hiệu suất của quá trình cross-chain bị giới hạn do việc sử dụng mã hóa toàn phần đồng hình, không thể thực hiện giao dịch tiền điện tử giữa các chuỗi một cách hiệu quả.

2. **Sơ Đồ Giám Sát và Bảo Mật Chuyển Tiền Trên Cross-Chain của Yang et al.[26]**
   - **Thuật Toán Bằng Chứng Không Biết Zero-Knowledge Groth16 và Công Nghệ Trộn Đồng Tiền (Coin-Mixing):** Được thiết kế để giải quyết các vấn đề cross-chain trong các ứng dụng IoT không tin cậy.
   - **Thiết Kế Tập Trung:** Yêu cầu tất cả người dùng trong mỗi chuỗi chỉ sử dụng một đường cong sinh để tính toán địa chỉ ngoài của giao dịch, gây ra sự phụ thuộc vào một thiết kế tập trung.
   
3. **ZeroCross của Li et al.[27]**
   - **Dành Cho Monero:** Giải pháp này chỉ cho phép trao đổi Monero với các loại tiền tệ khác.
   - **Phòng Chống Tấn Công Kênh Phía Xa (Remote Side-Channel Attacks):** Sử dụng giao thức CP-SNARK và bộ tích lũy (accumulators) để bảo vệ giao dịch.
   - **Hạn Chế:** Để trao đổi Bitcoin lấy Ether, người dùng phải thực hiện hai lần trao đổi: Bitcoin ➔ Monero và Monero ➔ Ether, làm tăng chi phí giao dịch và có thể dẫn đến mất mát do biến động tỷ giá.

4. **PXCrypto của Zhang et al.[28]**
   - **Mapping Heterogeneous Tokens:** Gắn các token khác nhau lên chuỗi được phép PXCrypto thông qua bằng chứng tài sản giữa các chuỗi (cross-chain asset proofs), sau đó có thể thực hiện giao dịch sử dụng các token bọc tương ứng.
   - **Sử Dụng Tính Toán Đa Bên Proxy (Proxy Multi-Party Computing):** Đạt được giao dịch giữa các chuỗi bảo mật.
   - **Hạn Chế:** Địa chỉ người gửi trên blockchain công khai có thể được truy cập bởi bất kỳ ai trong quá trình bằng chứng tài sản và quá trình đổi.

5. **Sử Dụng Chữ Ký Adaptor và Hợp Đồng Khóa Hợp Thời**
   - **Thyagarajan et al.[30]:** Đề xuất một giao thức thực tế cho phép thực hiện giao dịch nguyên tử mà không cần giả định về độ tin cậy. Sử dụng các câu đố khóa thời gian và chữ ký adaptor.
   - **Chen et al.[29]:** Đề xuất PACDAM, kết hợp chữ ký adapter và chứng minh không biết để xây dựng một giao thức trao đổi giữa các chuỗi bảo vệ quyền riêng tư toàn diện và đạt được thị trường tài sản thích ứng.
   - **Hạn Chế:** Các sơ đồ này yêu cầu tất cả các bên tham gia giao dịch phải đàm phán trực tiếp ở tất cả các giai đoạn của giao dịch giữa các chuỗi, và có thể truy cập đầy đủ thông tin giao dịch của nhau. Nếu một trong số này bị tấn công, thông tin giao dịch có thể bị lộ, gây rủi ro cho quyền riêng tư của các bên tham gia khác.

## 3. Các Kiến Thức Cơ Bản (Preliminaries)

### 3.1. Zk-SNARK

**Zk-SNARK** (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) là một công nghệ chứng minh không biết với tính chất chứng minh ngắn gọn. Một sơ đồ zk-SNARK bao gồm các thuật toán sau:

1. **Setup (Thiết Lập):**
   - **Input:** Tham số bảo mật λ và một mạch đại số C với mối quan hệ RC và ngôn ngữ LC.
   - **Output:** Tạo ra khóa chứng minh pk và khóa xác minh vk.

2. **Prove (Chứng Minh):**
   - **Input:** Khóa chứng minh pk, chứng từ w, và một phát biểu x sao cho (x, w) ∈ RC.
   - **Output:** Tạo ra một chứng minh không tương tác π.

3. **Verify (Xác Minh):**
   - **Input:** Khóa xác minh vk, phát biểu x, và chứng minh π.
   - **Output:** 1 nếu π là chứng minh hợp lệ cho phát biểu x ∈ LC, ngược lại là 0.

**Các Tính Chất:**
- **Hoàn Thiện (Completeness):** Nếu một mạch đại số C và một cặp (x, w) thỏa mãn (x, w) ∈ RC, thì một người chứng minh trung thực luôn thuyết phục được người xác minh trung thực.
- **Kiến Thức Âm Âu (Knowledge Soundness):** Nếu (x, w) ∉ RC, khả năng tạo ra π sao cho Verify(vk, x, π) → 1 là không đáng kể.
- **Không Biết Zero-Knowledge (Zero Knowledge):** Chứng minh được tạo ra bởi người chứng minh trung thực không cung cấp bất kỳ thông tin nào về chứng từ cho kẻ tấn công trong thời gian đa thức.

### 3.2. Sơ Đồ Cam Kết (Commitment Scheme)

**Sơ Đồ Cam Kết** bao gồm hai thuật toán: Commit và Verify.

1. **Commit (Cam Kết):**
   - **Input:** Thông điệp m và phần tử ngẫu nhiên r.
   - **Output:** Commitment COM = Commit(m, r).

2. **Verify (Xác Minh):**
   - **Input:** Thông điệp m, phần tử ngẫu nhiên r, và cam kết COM.
   - **Output:** 0 hoặc 1, chỉ ra liệu COM có phải là cam kết hợp lệ cho thông điệp m và phần tử ngẫu nhiên r hay không.

**Tính Chất:**
- **Ràng Buộc (Binding):** Người cam kết không thể thay đổi thông điệp m sau khi đã cam kết.
- **Ẩn Danh (Hiding):** Người xác minh không thể biết được thông điệp m từ cam kết COM mà không có thông tin về r.

## Kết Luận

Phần này đã trình bày chi tiết về các giải pháp và công nghệ bảo vệ quyền riêng tư trong giao dịch tiền điện tử giữa các chuỗi, bao gồm các sơ đồ notary, sidechains, relays, HTLCs, và các giải pháp sử dụng chứng minh không biết như zk-SNARK. Ngoài ra, cũng đã giới thiệu các kiến thức cơ bản về zk-SNARK và sơ đồ cam kết, những công nghệ nền tảng quan trọng trong việc xây dựng các giao thức bảo mật và bảo vệ quyền riêng tư cho các giao dịch giữa các chuỗi blockchain.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!

# Giải Thích Phần Tiếp Theo Về Cam Kết Pedersen và Kiến Trúc Hệ Thống

## 3.2. Sơ Đồ Cam Kết (tiếp tục)

**Sơ đồ Cam Kết** giúp một bên chứng minh (prover) thuyết phục các bên xác minh (verifiers) rằng một thông điệp \( m \) đã được cam kết mà không tiết lộ nội dung của nó.

### Cam Kết Pedersen

Chúng ta giới thiệu **Sơ đồ Cam Kết Pedersen** \[32\], có đặc tính **ẩn hoàn hảo** (perfectly hiding) và **ràng buộc tính toán** (computationally binding).

- **Định Nghĩa:**
  - Cho \( q \) là một số nguyên tố và \( G_q \) là một nhóm xoắn vòng có thứ tự \( q \) với hai trình sinh \( g \) và \( h \).
  - **Thuật toán Cam Kết:**
    \[
    \text{Commit}(m, r) = g^m h^r = \text{COM}
    \]
    - **Input:** \( m \in \mathbb{Z}_q \) (thông điệp) và \( r \in \mathbb{Z}_q \) (phần tử ngẫu nhiên).
    - **Output:** Cam kết \( \text{COM} \).
  - **Thuật toán Xác Minh:**
    \[
    \text{Verify}(m, r, \text{COM}) \rightarrow \{0, 1\}
    \]
    - **Input:** Thông điệp \( m \), phần tử ngẫu nhiên \( r \), và cam kết \( \text{COM} \).
    - **Output:** Trả về \( 1 \) nếu \( g^m h^r = \text{COM} \), ngược lại trả về \( 0 \).

## 4. Kiến Trúc Hệ Thống và Mô Hình

### 4.1. Mô Hình Hệ Thống

**Hình 1. Mô hình hệ thống của sơ đồ chuyển tiền điện tử giữa các chuỗi bảo vệ quyền riêng tư**

Hình 1 mô tả kiến trúc hệ thống tổng thể, bao gồm năm thành phần chính, mỗi thành phần được mô tả dưới đây:

#### 1. Người Gửi (Payer)

- **Định Nghĩa:** Là người dùng mong muốn chuyển hoặc trao đổi tiền điện tử giữa các blockchain một cách ẩn danh.
- **Đặc điểm:**
  - Mỗi người gửi sở hữu nhiều địa chỉ trên các blockchain và loại tiền điện tử khác nhau trong các địa chỉ này.

#### 2. Trung Gian (Intermediary)

- **Định Nghĩa:** Chịu trách nhiệm khóa và giải phóng tiền điện tử một cách ẩn danh trong các giao dịch giữa các chuỗi.
- **Đặc điểm:**
  - Có nhiều địa chỉ trên các blockchain nguồn khác nhau.
  - Cần phải gửi cọc (collateral) trên blockchain giao dịch.
  - Trung gian cần được đăng ký trong hợp đồng thông minh của giao dịch.

#### 3. Blockchain Nguồn (Source Blockchain)

- **Định Nghĩa:** Các blockchain nguồn khác nhau có các loại tiền điện tử khác nhau mà không thể giao dịch trực tiếp với nhau, ví dụ như Bitcoin và Ether.

#### 4. Blockchain Giao Dịch (Transaction Blockchain)

- **Định Nghĩa:** Yêu cầu một phương pháp để tạo tài sản tùy chỉnh và hỗ trợ xác minh các chứng minh zk-SNARK.

#### 5. Hợp Đồng Thông Minh Giao Dịch (Transaction Smart Contract)

- **Định Nghĩa:** Là các hợp đồng thông minh được triển khai trên blockchain giao dịch và thực hiện các giao dịch tiền điện tử được ánh xạ một cách bảo mật.

### Bảng 1. Tóm Tắt Các Ký Hiệu

*Bảng này thường sẽ liệt kê các ký hiệu và định nghĩa tương ứng trong hệ thống.*

### Tổng Quan Về Sơ Đồ Chuyển Tiền

Để tiện lợi, giả sử rằng các người gửi thay đổi tiền điện tử giữa Bitcoin và Ethereum. Các bước thực hiện như sau:

1. **Yêu Cầu Giao Dịch:**
   - Người gửi \( P_a \) và \( P_b \) yêu cầu giao dịch khóa từ trung gian \( I_1 \) và \( I_2 \) tương ứng.
   
2. **Tính Toán Cam Kết:**
   - Họ tính toán cam kết về chi tiết giao dịch và gửi các cam kết này đến hợp đồng thông minh \( SC_t \).
   
3. **Khóa Tiền Điện Tử:**
   - Bitcoins hoặc ethers được khóa một cách ẩn danh vào địa chỉ của trung gian trong giao dịch khóa.
   
4. **Nạp Tiền Điện Tử:**
   - Sau khi nhận được tiền đã được khóa, \( I_1 \) và \( I_2 \) gửi thông tin giao dịch Mint đến \( SC_t \) để tạo ra tiền điện tử được ánh xạ (mắt định dạng).

### Ví Dụ Minh Họa

Giả sử \( P_a \) và \( P_b \) muốn trao đổi Bitcoin lấy Ether:

1. **Giao Dịch Khóa:**
   - \( P_a \) yêu cầu \( I_1 \) khóa Bitcoin vào hợp đồng thông minh.
   - \( P_b \) yêu cầu \( I_2 \) khóa Ether vào hợp đồng thông minh.
   
2. **Cam Kết và Chứng Minh:**
   - Các cam kết giao dịch được tính toán và gửi đến \( SC_t \).
   
3. **Minting Token:**
   - \( I_1 \) và \( I_2 \) tạo ra các token tương ứng trên blockchain giao dịch dựa trên các cam kết đã nhận.
   
4. **Hoàn Tất Giao Dịch:**
   - Người gửi nhận được các token được ánh xạ một cách ẩn danh thay vì trực tiếp trao đổi giữa các blockchain nguồn.

## Kết Luận

Phần này đã trình bày về **Sơ đồ Cam Kết Pedersen** và **kiến trúc hệ thống** của sơ đồ chuyển tiền điện tử giữa các chuỗi bảo vệ quyền riêng tư. Các thành phần chính bao gồm người gửi, trung gian, blockchain nguồn, blockchain giao dịch, và hợp đồng thông minh giao dịch, cùng với quá trình thực hiện giao dịch bảo mật giữa các blockchain khác nhau.

Nếu bạn cần giải thích thêm hoặc có bất kỳ câu hỏi nào khác, hãy cho tôi biết!

# Giải Thích Bảng Ký Hiệu và Kiến Trúc Hệ Thống

## Bảng 1. Ký Hiệu

| **Ký Hiệu** | **Mô Tả**                                                                                                     |
|-------------|----------------------------------------------------------------------------------------------------------------|
| 𝑃ₐ, 𝑃𝑏         | Người gửi của một giao dịch                                                                                   |
| 𝐼₁, 𝐼₂         | Trung gian của một giao dịch                                                                                  |
| 𝑆₁, 𝑆₂         | Blockchain nguồn                                                                                              |
| 𝑇𝐵            | Blockchain giao dịch                                                                                           |
| 𝑆𝐶ₜ           | Hợp đồng thông minh giao dịch                                                                                  |
| 𝐻𝑎𝑠ℎ          | Hàm băm chống va chạm                                                                                           |
| 𝐶𝑂𝑀          | Sơ đồ cam kết                                                                                                  |
| 𝐶𝑆           | Đồng tiền được ánh xạ hỗ trợ bởi blockchain nguồn 𝑆                                                           |
| Δ𝑖𝑑          | Khoảng thời gian trễ với định danh 𝑖𝑑                                                                         |
| 𝑠𝑛           | Số seri của một cam kết đồng tiền được ánh xạ                                                                   |
| 𝑇𝑋𝑖𝑑        | Giao dịch với định danh 𝑖𝑑                                                                                     |
| 𝑟𝑡𝑆          | Gốc của cây Merkle lưu trữ các cam kết đồng tiền được ánh xạ hỗ trợ bởi blockchain nguồn 𝑆                      |
| 𝑃𝑆𝑝𝑘, 𝐼𝑆𝑝𝑘  | Địa chỉ công khai của người gửi hoặc trung gian trong blockchain nguồn 𝑆                                      |
| 𝑟𝑎𝑡𝑒𝑆₂, 𝑆₁   | Tỷ giá trao đổi tiền điện tử giữa blockchain 𝑆₁ và blockchain 𝑆₂ cho các đồng tiền được ánh xạ               |

## 4.1. Mô Hình Hệ Thống

Hình 1 dưới đây mô tả kiến trúc hệ thống tổng thể của sơ đồ chuyển tiền điện tử giữa các chuỗi bảo vệ quyền riêng tư, bao gồm năm thành phần chính:

- **Người Gửi (Payer):** Là người dùng mong muốn chuyển hoặc trao đổi tiền điện tử giữa các blockchain một cách ẩn danh. Mỗi người gửi sở hữu nhiều địa chỉ trên các blockchain và các loại tiền điện tử khác nhau trong các địa chỉ này.

- **Trung Gian (Intermediary):** Chịu trách nhiệm khóa và giải phóng tiền điện tử một cách ẩn danh trong các giao dịch giữa các chuỗi. Trung gian có nhiều địa chỉ trên các blockchain nguồn khác nhau và cần phải gửi cọc (collateral) trên blockchain giao dịch. Trung gian cần được đăng ký trong hợp đồng thông minh của giao dịch.

- **Blockchain Nguồn (Source Blockchain):** Các blockchain nguồn khác nhau có các loại tiền điện tử khác nhau mà không thể giao dịch trực tiếp với nhau, chẳng hạn như Bitcoin và Ether.

- **Blockchain Giao Dịch (Transaction Blockchain):** Yêu cầu một phương pháp để tạo tài sản tùy chỉnh và hỗ trợ xác minh các chứng minh zk-SNARK.

- **Hợp Đồng Thông Minh Giao Dịch (Transaction Smart Contract):** Là các hợp đồng thông minh được triển khai trên blockchain giao dịch và thực hiện các giao dịch tiền điện tử được ánh xạ một cách bảo mật.

### Quy Trình Hoạt Động

Để tiện lợi, giả sử rằng các người gửi thay đổi tiền điện tử giữa Bitcoin và Ethereum. Quy trình thực hiện như sau:

1. **Yêu Cầu Giao Dịch:**
   - Người gửi \( P_a \) và \( P_b \) yêu cầu giao dịch khóa từ trung gian \( I_1 \) và \( I_2 \) tương ứng.

2. **Tính Toán Cam Kết:**
   - Họ tính toán cam kết về chi tiết giao dịch và gửi các cam kết này đến hợp đồng thông minh \( SC_t \).

3. **Khóa Tiền Điện Tử:**
   - Bitcoins hoặc ethers được khóa một cách ẩn danh vào địa chỉ của trung gian trong giao dịch khóa.

4. **Nạp Tiền Điện Tử:**
   - Sau khi nhận được tiền đã được khóa, \( I_1 \) và \( I_2 \) gửi thông tin giao dịch Mint đến \( SC_t \) để tạo ra tiền điện tử được ánh xạ.

5. **Trao Đổi Nguyên Tử:**
   - Người gửi sử dụng giao thức trao đổi nguyên tử để trao đổi các đồng tiền được ánh xạ.

6. **Yêu Cầu Rút Tiền:**
   - Cuối cùng, \( P_a \) và \( P_b \) yêu cầu giao dịch rút tiền từ hợp đồng thông minh và đàm phán chi tiết các giao dịch giải phóng với trung gian tương ứng. Trung gian sẽ chuyển loại và số lượng tiền tương ứng đến người gửi một cách riêng tư.

### Xử Lý Khi Trung Gian Không Thực Hiện Đúng

Nếu trung gian không thực hiện đúng giao dịch khóa, người gửi có thể tranh chấp trong một khoảng thời gian nhất định để nhận được cọc từ trung gian như một khoản bồi thường. Tương tự, nếu trung gian không thực hiện đúng giao dịch giải phóng, người gửi có thể tranh chấp trong một khoảng thời gian nhất định để nhận được cọc hoặc yêu cầu giao dịch giải phóng từ các trung gian khác.

## 4.2. Cấu Trúc Dữ Liệu

Sơ đồ của chúng tôi bao gồm các cấu trúc dữ liệu sau:

- **Ledger (Sổ Cái):** Sơ đồ của chúng tôi dựa trên một blockchain giao dịch.

- **Cam Kết và Số Seri:**
  - Sơ đồ sử dụng một sơ đồ cam kết để xây dựng đồng tiền được ánh xạ và sử dụng số seri để ngăn chặn việc chi tiêu gấp đôi.
  - Định nghĩa cam kết đồng tiền được ánh xạ là \( CS = \text{Hashs}(v||apk) \), khóa công khai của một đồng tiền được ánh xạ là \( apk = \text{Hashp}(ask) \), và số seri của một đồng tiền được ánh xạ là \( sn = \text{Hashask}(CS) \).
  - Đồng tiền được ánh xạ được ký hiệu là \( mcS := (apk, ask, p, v, s, CS) \), bao gồm thông tin cần thiết để chi tiêu một cam kết.

- **Cây Merkle:**
  - Các loại cam kết tiền điện tử được ánh xạ khác nhau được lưu trữ trong các cây Merkle khác nhau.
  - Đường dẫn xác thực từ một cam kết \( COM \) đến gốc cây Merkle được ký hiệu là \( \text{Path}(COM) \).
  - Định nghĩa \( \text{CMListTS} \) là danh sách lưu trữ các cam kết đồng tiền được ánh xạ từ blockchain nguồn \( S \) tại thời điểm \( T \), \( \text{SNListTS} \) là danh sách lưu trữ các số seri đã sử dụng.
  - Để cho phép giao dịch trao đổi nguyên tử, định nghĩa \( \text{LockCMListTS} \) là danh sách lưu trữ các cam kết đã được khóa.

## 4.3. Mô Hình Bảo Mật

Trong sơ đồ của chúng tôi, người gửi và trung gian không được tin tưởng, với mục tiêu thu nhận càng nhiều tiền càng tốt và tránh các tổn thất tài chính.

Các giả định bảo mật trong sơ đồ bao gồm:

- **An Toàn của Các Nguyên Tố Mã Hóa:** Các sơ đồ mã hóa được sử dụng trong bài báo này được giả định là an toàn.
- **Ràng Buộc Tính Tính Toán của Kẻ Thù:** Kẻ thù bị ràng buộc về mặt tính toán.
- **Thông Số Công Khai Được Tạo Bởi Bên Tin Cậy:** Thông số công khai được tạo ra bởi một bên tin cậy trong giai đoạn khởi tạo hệ thống.

### Mục Tiêu Bảo Mật

Chúng tôi định nghĩa không chính thức các mục tiêu bảo mật như sau:

- **Không Khả Dụng Phân Biệt Giao Dịch (Transaction Indistinguishability):**
  - Các giao dịch khóa hoặc giải phóng trên blockchain nguồn không thể phân biệt được với các giao dịch thông thường khác trên blockchain. Điều này đảm bảo rằng các giao dịch giữa các chuỗi không bị phát hiện là giao dịch đặc biệt, tăng cường tính bảo mật và riêng tư cho người dùng.

## Kết Luận

Phần này đã trình bày chi tiết về **Bảng Ký Hiệu**, **mô hình hệ thống**, **cấu trúc dữ liệu**, và **mô hình bảo mật** của sơ đồ chuyển tiền điện tử giữa các chuỗi bảo vệ quyền riêng tư. Các thành phần chính bao gồm người gửi, trung gian, blockchain nguồn, blockchain giao dịch, và hợp đồng thông minh giao dịch, cùng với các cấu trúc dữ liệu như sổ cái, cam kết, số seri và cây Merkle. Mô hình bảo mật đảm bảo tính không khả dụng phân biệt giao dịch, giúp bảo vệ quyền riêng tư và an toàn cho các giao dịch giữa các chuỗi blockchain khác nhau.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!

# Giải Thích Các Mục Tiêu Bảo Mật và Giao Thức Khóa và Giải Phóng Tiền Điện Tử Bảo Vệ Quyền Riêng Tư

## 4.3. Mô Hình Bảo Mật

### Các Mục Tiêu Bảo Mật

- **Không khả dụng phân biệt sổ cái (Ledger Indistinguishability):**
  - Một kẻ địch bị giới hạn không thể thu thập thêm thông tin từ sổ cái ngoài những gì đã được công khai, ngay cả khi hắn có thể quan sát tất cả thông tin công khai và tương tác với các bên trung thực.

- **Không biến đổi giao dịch (Transaction Non-malleability):**
  - Dữ liệu giao dịch không thể bị kẻ địch bị giới hạn sửa đổi.

- **Số dư (Balance):**
  - Một kẻ địch bị giới hạn không thể sở hữu nhiều tiền hơn những gì hắn đã tạo ra hoặc nhận từ người khác.

## 5. Giao Thức Khóa và Giải Phóng Tiền Điện Tử Bảo Vệ Quyền Riêng Tư

Trong phần này, chúng tôi trình bày chi tiết về giao thức khóa và giải phóng tiền điện tử bảo vệ quyền riêng tư. Chúng tôi giả định rằng **Pa** muốn tạo ra **va** bitcoins được ánh xạ và đổi lại **vb** ethers được ánh xạ. Chúng tôi sử dụng **chain relays** để cho phép **SCt** xác minh rằng các hành vi đúng đắn đã diễn ra trên các blockchain nguồn. **Chain relays** cung cấp dữ liệu blockchain bên ngoài, chẳng hạn như các giao dịch trên các blockchain nguồn, cho hợp đồng thông minh **SCr** trên blockchain giao dịch. Do đó, **SCt** có thể theo dõi mọi hành động của mọi người tham gia trên các blockchain khác nhau. Giao thức bao gồm hai pha: **pha khóa (lock phase)** và **pha giải phóng (release phase)**.

**Hình 2. Giao thức khóa tiền điện tử bảo vệ quyền riêng tư**

### 5.1. Pha Khóa

Pha khóa bao gồm hai giao thức: **giao thức khóa tiền điện tử bảo vệ quyền riêng tư** và **giao thức tranh chấp**. Trong pha này, **Pa** chọn một **trung gian I1** để khóa **va** bitcoins. Sau đó, **I1** gửi các giao dịch khóa đến **SCt** để tạo ra các đồng tiền được ánh xạ. Nếu **I1** không thực hiện giao dịch như đã thỏa thuận với **Pa**, thì **Pa** có thể sử dụng **giao thức tranh chấp** để cung cấp bằng chứng và nhận được bồi thường.

Trước khi **Pa** thực hiện giao dịch khóa, **I1** cần gửi cọc với số tiền:

\[
vd = \text{rate}_{TB S1} \times va \times \alpha
\]

Trong đó, **α** là tỷ lệ cọc bổ sung, nhằm ngăn ngừa mất mát tài chính trong trường hợp tỷ giá trao đổi giữa bảng giao dịch (transaction blockchain) và bảng nguồn (source blockchain) biến động mạnh. Ngoài ra, chúng tôi định nghĩa một thời gian trễ giao dịch tối đa:

\[
\Delta tx = \Delta S1 + \Delta relay + \Delta TB
\]

Để ngăn cản **cọc của trung gian** bị khóa quá lâu, trong đó:
- **ΔS1** là thời gian trễ trong việc thực hiện một giao dịch chuyển.
- **Δrelay** là thời gian trễ giữa việc tạo ra một khối.
- **ΔTB** là thời gian trễ trong việc xác nhận giao dịch trên bảng nguồn và bảng giao dịch tương ứng.

## Kết Luận

Phần này đã trình bày các mục tiêu bảo mật của hệ thống, bao gồm không khả dụng phân biệt sổ cái, không biến đổi giao dịch và bảo vệ số dư. Đồng thời, chúng tôi cũng đã giới thiệu chi tiết về **giao thức khóa tiền điện tử bảo vệ quyền riêng tư**, bao gồm các bước thực hiện và các biện pháp bảo mật nhằm đảm bảo an toàn và bảo mật cho các giao dịch giữa các blockchain khác nhau.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!


# Giải Thích Các Mục Tiêu Bảo Mật và Giao Thức Khóa và Giải Phóng Tiền Điện Tử Bảo Vệ Quyền Riêng Tư

## 4.3. Mô Hình Bảo Mật (tiếp tục)

### Các Mục Tiêu Bảo Mật

- **Không khả dụng phân biệt sổ cái (Ledger Indistinguishability):**
  - Một kẻ địch bị giới hạn không thể thu thập thêm thông tin từ sổ cái ngoài những gì đã được công khai, ngay cả khi hắn có thể quan sát tất cả thông tin công khai và tương tác với các bên trung thực.
  
- **Không biến đổi giao dịch (Transaction Non-malleability):**
  - Dữ liệu giao dịch không thể bị kẻ địch bị giới hạn sửa đổi.
  
- **Số dư (Balance):**
  - Một kẻ địch bị giới hạn không thể sở hữu nhiều tiền hơn những gì hắn đã tạo ra hoặc nhận từ người khác.

## 5. Giao Thức Khóa và Giải Phóng Tiền Điện Tử Bảo Vệ Quyền Riêng Tư

Trong phần này, chúng tôi trình bày chi tiết về **giao thức khóa và giải phóng tiền điện tử bảo vệ quyền riêng tư**. Chúng tôi giả định rằng **Pa** muốn tạo ra **va** bitcoins được ánh xạ và đổi lại **vb** ethers được ánh xạ. Chúng tôi sử dụng **chain relays** để cho phép **SCt** xác minh rằng các hành vi đúng đắn đã diễn ra trên các blockchain nguồn. **Chain relays** cung cấp dữ liệu blockchain bên ngoài, chẳng hạn như các giao dịch trên các blockchain nguồn, cho hợp đồng thông minh **SCr** trên blockchain giao dịch. Do đó, **SCt** có thể theo dõi mọi hành động của mọi người tham gia trên các blockchain khác nhau. Giao thức bao gồm hai pha: **pha khóa (lock phase)** và **pha giải phóng (release phase)**.

**Hình 2. Giao thức khóa tiền điện tử bảo vệ quyền riêng tư**

### 5.1. Pha Khóa

**Pha khóa** bao gồm hai giao thức: **giao thức khóa tiền điện tử bảo vệ quyền riêng tư** và **giao thức tranh chấp**. Trong pha này, **Pa** chọn một **trung gian I1** để khóa **va** bitcoins. Sau đó, **I1** gửi các giao dịch khóa đến **SCt** để tạo ra các đồng tiền được ánh xạ. Nếu **I1** không thực hiện giao dịch như đã thỏa thuận với **Pa**, thì **Pa** có thể sử dụng **giao thức tranh chấp** để cung cấp bằng chứng và nhận được bồi thường.

Trước khi **Pa** thực hiện giao dịch khóa, **I1** cần gửi cọc với số tiền:

\[
vd = \text{rate}_{TB S1} \times va \times \alpha
\]

Trong đó, **α** là tỷ lệ cọc bổ sung, nhằm ngăn ngừa mất mát tài chính trong trường hợp tỷ giá trao đổi giữa bảng giao dịch (transaction blockchain) và bảng nguồn (source blockchain) biến động mạnh. Ngoài ra, chúng tôi định nghĩa một thời gian trễ giao dịch tối đa:

\[
\Delta tx = \Delta S1 + \Delta relay + \Delta TB
\]

Để ngăn cản **cọc của trung gian** bị khóa quá lâu, trong đó:
- **ΔS1** là thời gian trễ trong việc thực hiện một giao dịch chuyển.
- **Δrelay** là thời gian trễ giữa việc tạo ra một khối.
- **ΔTB** là thời gian trễ trong việc xác nhận giao dịch trên bảng nguồn và bảng giao dịch tương ứng.

**Hình 3. Giao thức tranh chấp trong pha khóa**

Trong khoảng thời gian trễ tranh chấp **Δdispute**, người gửi tiền có thể nộp các giao dịch tranh chấp cho các trường hợp họ đã chuyển số tiền đồng ý nhưng trung gian không cung cấp đúng thông tin giao dịch khóa. **Hình 3** minh họa quy trình của **giao thức tranh chấp trong pha khóa**. **Pa** trước tiên gửi **TX XL**, **P S1 pk**, **I S1 pk**, **r1**, **r2**, **r3**, và bằng chứng Merkle bao gồm các giao dịch trên blockchain nguồn để mở các cam kết. Sau đó, **SCt** xác minh xem các cam kết có đúng hay không và yêu cầu **SCr** xác minh bằng chứng bao gồm giao dịch. Nếu kết quả xác minh là đúng, **SCt** sẽ tạo ra đồng tiền được ánh xạ và **cọc của trung gian** sẽ bị trừ một phần để bồi thường cho người gửi **Pa**. Khuyến khích các trung gian sử dụng các địa chỉ công khai khác nhau cho mỗi giao dịch để người gửi có thể kiểm tra xem các địa chỉ này đã được sử dụng trong các giao dịch trước đó hay chưa.

### 5.2. Pha Giải Phóng

**Giao thức giải phóng tiền điện tử bảo vệ quyền riêng tư** được trình bày trong **Hình 4**. Đầu tiên, **Pa** yêu cầu một giao dịch giải phóng **TX XR = {rtS2, snin, vb, πSP END, Cout S2}** từ **SCt**. Quá trình xác minh của **TX XR** sẽ được mô tả trong **sơ đồ giao dịch bảo mật tiền điện tử được ánh xạ (MCCT)** ở phần tiếp theo. Sau khi **SCt** xác minh **TX XR**, **I1** gửi địa chỉ **I S2 pk** được sử dụng trong giao dịch giải phóng và tổng giá trị giao dịch **vt = va − vf** đến **Pa**. 

Sau đó, **Pa** chọn các số ngẫu nhiên **r1**, **r2**, **r3**, và địa chỉ **P S2 pk** được sử dụng trong giao dịch giải phóng để gửi đến **I1**. Tiếp theo, **I1** tính toán các cam kết của tất cả các địa chỉ tham gia trong giao dịch giải phóng và tổng giá trị giao dịch như sau:

\[
com1 = \text{COMr1}(P S2 pk), \quad com2 = \text{COMr2}(I S2 pk), \quad com3 = \text{COMr3}(vt)
\]

**I1** gửi cọc **vd = \text{rate}_{TB S2} \times vb \times \alpha** và các cam kết đến **SCt**. Sau khi **SCt** xác minh cọc và các cam kết, **I1** chuyển **vt** coins đến **Pa** trên blockchain nguồn trong khoảng thời gian trễ tối đa **Δtx**. Cuối cùng, **I1** gửi kết quả giao dịch đến **SCt**. Sau khi **I1** hoàn tất giao dịch giải phóng thành công, **I1** có thể rút **collatera**.

*(Chú ý: Đoạn văn bản được cung cấp bị cắt ngắn nên phần cuối không đầy đủ.)*

## Kết Luận

Phần này đã trình bày chi tiết về **giao thức khóa và giải phóng tiền điện tử bảo vệ quyền riêng tư**, bao gồm các bước thực hiện và các biện pháp bảo mật nhằm đảm bảo an toàn và bảo mật cho các giao dịch giữa các blockchain khác nhau. Các bước chính bao gồm:
1. **Pha khóa:** Người gửi chọn trung gian, tạo cam kết, gửi giao dịch khóa, và xử lý các cam kết và bằng chứng.
2. **Giao thức tranh chấp:** Người gửi có thể tranh chấp nếu trung gian không thực hiện đúng cam kết giao dịch khóa.
3. **Pha giải phóng:** Người gửi yêu cầu giải phóng tiền, trung gian thực hiện cam kết và chuyển tiền sau khi được xác minh.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!



# Giải Thích Sơ Đồ Giao Dịch Bảo Mật Tiền Điện Tử Được Ánh Xạ (MCCT)

## 6. Sơ Đồ Giao Dịch Bảo Mật Tiền Điện Tử Được Ánh Xạ (MCCT)

Trong phần này, chúng tôi sẽ giải thích cách thức hoạt động của **sơ đồ giao dịch bảo mật tiền điện tử được ánh xạ (MCCT)**. Sau đó, chúng tôi thiết kế một **giao thức trao đổi nguyên tử** dựa trên **MCCT**.

### Thuật Toán 1: Các Thuật Toán Chính của MCCT

```plaintext:algorithms/mcct_algorithm1
Algorithm 1 Main algorithms of MCCT

Setup(λ):
    Compute (pk, vk) ← zk-SNARK.Setup(1λ, CSP_END);
    Initialize Merkle trees và bộ cam kết CMListS1, CMListS2;
    Set pp ← (pkSP_END, vkSP_END);
    return pp;

KeyGen(pp):
    Randomly sample ask và p;
    Compute apk = Hashp(ask);
    return apk, ask;

Mint(v, apk, rtS):
    Randomly sample s;
    Compute CS ← Hash(v || apk || s);
    Set TXm := (CS, v, apk, s, rtS);
    return mcS, TXm;

Transfer(rtS, mcinS, vout, aoutpk):
    Parse mcinS as (ainpk, ainsk, pin, vin, sin, Cins);
    Compute sninS := Hash(CS, ask);
    Randomly sample sout;
    Compute mcoutS := Hash(vout, aoutpk, sout);
    Set mcoutS := (aoutpk, aoutsK, pout, vout, sout, CoutS);
    Set s⃖⃗ := (rtS, sninS, CoutS, 0, path(Cins));
    Set w⃖⃖⃗ := (Cins, sin, sout, vin, vout, ainpk, ainsk, aoutpk, pin);
    Compute πSP_END := zk-SNARK.Prove(pkSP_END, w, s⃖⃗);
    Set TXt := (s, π⃖⃗ SP_END);
    return mcoutS, TXt;

Redeem(rtS, mcinS, vout, vpub, aoutpk, I):
    Parse mcinS as (ainpk, ainsk, pin, vin, sin, Cins);
    Compute sninS := Hash(CS, ask);
    Randomly sample sout;
    Compute mcoutS := Hash(vout, aoutpk, sout);
    Set mcoutS := (aoutpk, aoutsK, pout, vout, sout, CoutS);
    Set s⃖⃗ := (rtS, sninS, CoutS, vpub);
    Set w⃖⃖⃗ := (Cins, sin, sout, vin, vout, ainpk, ainsk, aoutpk, pin, path(Cins));
    Compute πSP_END := zk-SNARK.Prove(pkSP_END, w⃖⃖⃗, s⃖⃗);
    Set TXr := (s, π⃖⃗ SP_END, I);
    return mcoutS, TXr;

Exchange(rtS1, rtS2, mcinS1, mcoutS2, voutS1, voutS2, aoutpk,S1, aoutpk,S2):
    For each i ∈ {1, 2}
        Parse mcinSi as (ainpk, Si, ainsk, Si, pinSi, vinSi, sinSi, CinsSi);
        Compute sninSi := Hash(CinsSi, aaskSi);
        Randomly sample soutSi;
        Compute mcoutSi := Hash(voutSi, aoutpk, soutSi);
    Set mcoutSi := (aoutpk, Si, aoutsK, Si, poutSi, voutSi, soutSi, CoutSi);
    Set s⃖⃗i := (rtSi, sninSi, CoutSi);
    Set w⃖⃖⃗i := (CinsSi, sinSi, soutSi, vinSi, voutSi, ainpkSi, ainskSi, aoutpkSi, Si, path(CinsSi));
    Compute πSiSP_END := zk-SNARK.Prove(pkSiSP_END, w⃖⃖⃗i, s⃖⃗i);
    Set TXe := (s⃖⃗1, s⃖⃗2, πS1SP_END, πS2SP_END);
    return mcoutS1, mcoutS2, TXe;
```

### 6.1. Tổng Quan

**MCCT** dựa trên **hợp đồng thông minh giao dịch (SCt)**. Trong sơ đồ của chúng tôi, **SCt** bao gồm ba loại hợp đồng thông minh được triển khai trên **blockchain giao dịch**:

1. **Hợp Đồng Trung Gian (Intermediary Contract):**
    - Kiểm soát hành vi của trung gian, bao gồm đăng ký và quản lý cọc.

2. **Hợp Đồng Cây Merkle (Merkle Tree Contract):**
    - Triển khai nhiều cây Merkle được sử dụng để chứng minh sự thành viên của các cam kết.
    - Các loại cam kết tiền điện tử được ánh xạ khác nhau được lưu trữ trong các cây Merkle khác nhau.

3. **Hợp Đồng Trộn (Mix Contract):**
    - Kiểm soát các giao dịch mint, transfer và redeem cho các tiền điện tử được ánh xạ.
    - Quản lý các bản ghi cam kết trong các cây Merkle, theo dõi các số seri và cam kết đã khóa, và xác minh các chứng minh zk-SNARK.
    - Định nghĩa **SNListS** là danh sách lưu trữ các số seri đã sử dụng từ **blockchain nguồn S**, và **LockCMListS** là danh sách lưu trữ các cam kết đã khóa từ **blockchain nguồn S**.

## 7. Kết Luận

Phần này đã trình bày chi tiết về **sơ đồ giao dịch bảo mật tiền điện tử được ánh xạ (MCCT)**, bao gồm các thuật toán chính như **Setup**, **KeyGen**, **Mint**, **Transfer**, **Redeem**, và **Exchange**. **MCCT** được xây dựng trên nền tảng hợp đồng thông minh giao dịch **SCt**, bao gồm các hợp đồng trung gian, cây Merkle, và hợp đồng trộn để đảm bảo tính bảo mật và riêng tư trong các giao dịch tiền điện tử giữa các blockchain khác nhau.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!

# Giải Thích Thuật Toán trong Sơ Đồ Giao Dịch Bảo Mật Tiền Điện Tử Được Ánh Xạ (MCCT)

# Giải Thích Thuật Toán trong Sơ Đồ Giao Dịch Bảo Mật Tiền Điện Tử Được Ánh Xạ (MCCT)

## 6.2. Thuật Toán

Sơ đồ MCCT bao gồm các thuật toán thời gian đa thức sau đây, và mô tả chính thức được cung cấp trong **Thuật toán 1** và **Thuật toán 2**.

### Thuật Toán 1: Các Thuật Toán Chính của MCCT

```plaintext:algorithms/mcct_algorithm1
Algorithm 1 Main algorithms of MCCT

Setup(λ) → pp:
    Compute (pk, vk) ← zk-SNARK.Setup(1λ, CSP_END);
    Initialize Merkle trees và bộ cam kết CMListS1, CMListS2;
    Set pp ← (pkSP_END, vkSP_END);
    return pp;

KeyGen(pp) → (apk, ask):
    Randomly sample ask và p;
    Compute apk = Hashp(ask);
    return apk, ask;

Mint(v, apk, rtS) → (mcS, TXm):
    Randomly sample s;
    Compute CS ← Hash(v || apk || s);
    Set TXm := (CS, v, apk, s, rtS);
    return mcS, TXm;

Transfer(rtS, mcinS, vout, aoutpk) → (mcoutS, TXt):
    Parse mcinS as (ainpk, ainsk, pin, vin, sin, Cins);
    Compute sninS := Hash(CS, ask);
    Randomly sample sout;
    Compute mcoutS := Hash(vout, aoutpk, sout);
    Set mcoutS := (aoutpk, aoutsK, pout, vout, sout, CoutS);
    Set s⃖⃗ := (rtS, sninS, CoutS, 0, path(Cins));
    Set w⃖⃖⃗ := (Cins, sin, sout, vin, vout, ainpk, ainsk, aoutpk, pin);
    Compute πSP_END := zk-SNARK.Prove(pkSP_END, w, s⃖⃗);
    Set TXt := (s, π⃖⃗ SP_END);
    return mcoutS, TXt;

Redeem(rtS, mcinS, vout, vpub, aoutpk, I) → (mcoutS, TXr):
    Parse mcinS as (ainpk, ainsk, pin, vin, sin, Cins);
    Compute sninS := Hash(CS, ask);
    Randomly sample sout;
    Compute mcoutS := Hash(vout, aoutpk, sout);
    Set mcoutS := (aoutpk, aoutsK, pout, vout, sout, CoutS);
    Set s⃖⃗ := (rtS, sninS, CoutS, vpub);
    Set w⃖⃖⃗ := (Cins, sin, sout, vin, vout, ainpk, ainsk, aoutpk, pin, path(Cins));
    Compute πSP_END := zk-SNARK.Prove(pkSP_END, w⃖⃖⃗, s⃖⃗);
    Set TXr := (s, π⃖⃗ SP_END, I);
    return mcoutS, TXr;

Exchange(rtS1, rtS2, mcinS1, mcoutS2, voutS1, voutS2, aoutpk,S1, aoutpk,S2) → (mcoutS1, mcoutS2, TXe):
    For each i ∈ {1, 2}
        Parse mcinSi as (ainpk, Si, ainsk, Si, pinSi, vinSi, sinSi, CinsSi);
        Compute sninSi := Hash(CinsSi, aaskSi);
        Randomly sample soutSi;
        Compute mcoutSi := Hash(voutSi, aoutpk, soutSi);
    Set mcoutSi := (aoutpk, Si, aoutsK, Si, poutSi, voutSi, soutSi, CoutSi);
    Set s⃖⃗i := (rtSi, sninSi, CoutSi);
    Set w⃖⃖⃗i := (CinsSi, sinSi, soutSi, vinSi, voutSi, ainpkSi, ainskSi, aoutpkSi, Si, path(CinsSi));
    Compute πSiSP_END := zk-SNARK.Prove(pkSiSP_END, w⃖⃖⃗i, s⃖⃗i);
    Set TXe := (s⃖⃗1, s⃖⃗2, πS1SP_END, πS2SP_END);
    return mcoutS1, mcoutS2, TXe;
```

### Thuật Toán 2: Xác Minh Giao Dịch (VerifyTransaction)

```plaintext:algorithms/mcct_algorithm2
Algorithm 2 VerifyTransaction(T_X, L) → 1∕0
    if T_X = T_Xm then
        Parse T_X as (CS, v, apk, s, rtS);
        Set b ← 1 nếu CS = Hash(v || apk || s), ngược lại b ← 0;
    else if T_X = T_Xt hoặc T_X = T_Xr then
        Parse T_X như (rtS, snin, CoutS, vpup, πSP_END);
        Set b ← 0 nếu snin đã được lưu trữ trong L;
        Set b ← 0 nếu CoutS đã được lưu trữ trong LockCMListS;
        Set b ← 0 nếu rtS không có trong L;
        Set s⃖⃗ := (rtS, snin, CoutS, vpup);
        Compute b ← (b ∧ zk-SNARK.Verify(vkSP_END, s⃖⃗, πSP_END));
    else if T_X = T_Xe then
        Parse T_X như (rtS1, rtS2, sninS1, sninS2, CoutS1, CoutS2, πS1SP_END, πS2SP_END);
        Set b ← 0 nếu sninS1 hoặc sninS2 đã được lưu trữ trong L;
        Set b ← 0 nếu CoutS1 hoặc CoutS2 đã được lưu trữ trong LockCMListS;
        Set b ← 0 nếu rtS1 hoặc rtS2 không có trong L;
        Set s⃖⃗1 := (rtS1, sninS1, CoutS1, 0);
        Set s⃖⃗2 := (rtS2, sninS2, CoutS2, 0);
        Compute b ← (b ∧ zk-SNARK.Verify(vkSP_END, s⃖⃗1, πS1SP_END));
        Compute b ← (b ∧ zk-SNARK.Verify(vkSP_END, s⃖⃗2, πS2SP_END));
    end if
    return b
```

### Thuật Toán 3: Thí Nghiệm

```plaintext:algorithms/mcct_algorithm3
Algorithm 3 Experiments

L-IND(λ):
    pp ← Setup(λ)
    (L0, L1) ← A MCCT0, MCCT1 (pp)
    randomly sample b ← {0, 1}
    Q ← {KeyGen, Mint, Transfer, Insert}
    ans(ab, a1−b) ← QueryLb (Q)
    b′ ← A MCCT0, MCCT1 (L0, L1, ans)
    return b = b′

TR-NM(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    TX′ ← A MCCT (L)
    b′ ← VerifyTransaction(TX′, L′) ∧ (TX ∉ L′)
    return b ∧ (∃ TX ∈ L : (TX ≠ TX′) ∧ (TX.s_n = TX′.s_n))

BAL(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    (CMLListS, vS_Mint, vS_Reci, vS_Send) ← A MCCT (L)
    (vS_Unspent, vS_Pub) ← Compute(L, CMLListS)
    If vS_Unspent + vS_Pub + vS_Send > vS_Mint + vS_Reci Then
        return 1
    Else return 0
```

### 6.3. Giao Thức Trao Đổi Nguyên Tử Tiền Điện Tử Được Ánh Xạ

Để thuận tiện cho việc minh họa, chúng tôi giả định rằng **Pa** muốn trao đổi **va** bitcoins được ánh xạ lấy **vb** ethers được ánh xạ với **Pb**. 

**Hình 6. Giao thức trao đổi nguyên tử tiền điện tử được ánh xạ**

*(Chú ý: Hình 6 được đề cập nhưng nội dung hình ảnh không được cung cấp trong văn bản.)*

## 7. Phân Tích Bảo Mật

Phân tích các đặc tính bảo mật của sơ đồ chúng tôi được trình bày trong phần này, bao gồm: không phân biệt giao dịch, ẩn danh, không thể tạo giả, và cân bằng.

### Định Lý 1. (Không Phân Biệt Giao Dịch)

Dựa trên tính ẩn hoàn hảo của sơ đồ cam kết Pedersen, sơ đồ đề xuất của chúng tôi thỏa mãn đặc tính không phân biệt giao dịch.

**Chứng Minh:**

Trong pha Khóa và pha Giải Phóng, tập địa chỉ công khai {PSpk,1, PSpk,2, ..., PSpk,n, ISpk,1, ISpk,2, ..., ISpk,m} của người gửi và trung gian và tổng giá trị của các giao dịch là không xác định đối với các người tham gia khác. Chỉ có các cam kết được công khai nộp cho hợp đồng giao dịch. Các cam kết của địa chỉ công khai và tổng giá trị của các giao dịch được tính như sau:

- comi = COMri(PSpk,i) = g PSpk,i^h_r,
- comj = COMrj(ISpk,j) = g PSpk,j^h_rj,
- comv = COMrv(vt) = g vth_rv.

Vì comi, comj và comv là cam kết Pedersen, dựa trên tính ẩn hoàn hảo của giao thức cam kết Pedersen, địa chỉ công khai của người gửi và trung gian không thể phân biệt từ các địa chỉ công khai khác trong blockchain nguồn, và tổng giá trị của các giao dịch được ẩn hoàn hảo. Do đó, đặc tính không phân biệt giao dịch được thỏa mãn.

### Thuật Toán 3: Thí Nghiệm

```plaintext:algorithms/mcct_algorithm3
Algorithm 3 Experiments

L-IND(λ):
    pp ← Setup(λ)
    (L0, L1) ← A MCCT0, MCCT1 (pp)
    randomly sample b ← {0, 1}
    Q ← {KeyGen, Mint, Transfer, Insert}
    ans(ab, a1−b) ← QueryLb (Q)
    b′ ← A MCCT0, MCCT1 (L0, L1, ans)
    return b = b′

TR-NM(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    TX′ ← A MCCT (L)
    b′ ← VerifyTransaction(TX′, L′) ∧ (TX ∉ L′)
    return b ∧ (∃ TX ∈ L : (TX ≠ TX′) ∧ (TX.s_n = TX′.s_n))

BAL(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    (CMLListS, vS_Mint, vS_Reci, vS_Send) ← A MCCT (L)
    (vS_Unspent, vS_Pub) ← Compute(L, CMLListS)
    If vS_Unspent + vS_Pub + vS_Send > vS_Mint + vS_Reci Then
        return 1
    Else return 0
```

## 7. Kết Luận

Phần này đã trình bày chi tiết về **sơ đồ giao dịch bảo mật tiền điện tử được ánh xạ (MCCT)**, bao gồm các thuật toán chính như **Setup**, **KeyGen**, **Mint**, **Transfer**, **Redeem**, và **Exchange**. **MCCT** được xây dựng trên nền tảng hợp đồng thông minh giao dịch **SCt**, bao gồm các hợp đồng trung gian, cây Merkle, và hợp đồng trộn để đảm bảo tính bảo mật và riêng tư trong các giao dịch tiền điện tử giữa các blockchain khác nhau.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!

# Định Lý 2 và Phân Tích Bảo Mật trong Sơ Đồ Giao Dịch Bảo Mật Tiền Điện Tử Được Ánh Xạ (MCCT)

## Định Lý 2

**Định Lý 2.** Bộ ba \( \Pi = (Setup, KeyGen, Mint, Transfer, Redeem, Exchange) \) là một sơ đồ MCCT. \( \Pi \) an toàn nếu nó thỏa mãn các đặc tính không phân biệt sổ cái, không liên kết giao dịch, không thể biến đổi giao dịch, và cân bằng như được định nghĩa dưới đây.

## Chứng Minh

Đầu tiên, chúng ta giả sử rằng tồn tại một oracle MCCT \( \mathcal{O}_{MCCT} \) trả lời các truy vấn từ một kẻ địch \( \mathcal{A} \) và một người thách đấu \( \mathcal{C} \) thực hiện các kiểm tra hợp lý cụ thể cho thí nghiệm. Đầu tiên, chúng ta trình bày cách thức hoạt động của \( \mathcal{O}_{MCCT} \). Oracle \( \mathcal{O}_{MCCT} \) lưu trữ:

1. **[I]** \( L \), một sổ cái;
2. **[II]** \( ADDR \), một tập hợp các cặp khóa địa chỉ;
3. **[III]** \( MCS \), một tập hợp các đồng tiền được ánh xạ hỗ trợ bởi blockchain nguồn \( S \).

Yêu cầu được giới hạn trong \( Q = \{KeyGen, Mint, Transfer, Insert\} \). Mỗi loại truy vấn \( Q \) được mô tả như sau:

### Truy Vấn KeyGen

```plaintext:algorithms/mcct_algorithm2
Q(KeyGen, pp) :
1. Compute \( (apk, ask) = KeyGen(pp) \).
2. Add cặp khóa địa chỉ \( (apk, ask) \) vào \( ADDR \).
3. Output khóa công khai \( apk \).
```

### Truy Vấn Mint

```plaintext:algorithms/mcct_algorithm2
Q(Mint, v, apk, rtS) :
1. Xác minh rằng \( rtS \) là gốc của cây Merkle lưu trữ các cam kết đồng tiền được hỗ trợ bởi blockchain nguồn \( S \).
2. Compute \( (mc, TXm) := Mint(v, apk, rtS) \).
3. Thêm \( mc \) vào \( MCS \).
4. Thêm giao dịch mint \( TXm \) vào \( L \).
```

### Truy Vấn Transfer

```plaintext:algorithms/mcct_algorithm2
Q(Transfer, S, mc_{in}^S, v_{out}^S, a_{out}^{pk}, S) :
1. Compute \( rtS \) trên tất cả các cam kết đồng tiền được hỗ trợ bởi blockchain nguồn \( S \).
2. Compute \( (mcout^S, TXt) = Transfer(rtS, mc_{in}^S, v_{out}^S, a_{out}^{pk}, S) \).
3. Xác minh rằng \( VerifyTransaction(TXt, L) \) trả về 1.
4. Thêm \( mcout^S \) vào \( MCS \).
5. Thêm giao dịch transfer \( TXt \) vào \( L \).
```

### Truy Vấn Insert

```plaintext:algorithms/mcct_algorithm2
Q(Insert, TX) :
1. Xác minh rằng \( VerifyTransaction(TX, L) \) trả về 1.
2. Thêm giao dịch \( TX \) vào \( L \).
3. Cập nhật \( MCS \).
```

Sau đó, chúng ta hình thành các đặc tính bảo mật với các thí nghiệm \( L-IND \), \( TR-NM \), và \( BAL \), được thể hiện trong **Thuật toán 3**.

## Định Nghĩa 1 (Không Phân Biệt Sổ Cái)

**Định Nghĩa 1 (Ledger Indistinguishability).** Với mọi kẻ địch PPT \( \mathcal{A} \) và \( \lambda \) đủ lớn, chúng ta nói rằng một sơ đồ MCCT \( \Pi \) là an toàn theo \( L-IND \) nếu phương trình sau được thỏa mãn:

\[
\Pr[MCCT\text{-}IND_{\Pi, \mathcal{A}}(\lambda) = 1] \leq \frac{1}{2} + \text{negl}(\lambda)
\]

## Chứng Minh Không Phân Biệt Sổ Cái

Để chứng minh tính không phân biệt sổ cái của sơ đồ MCCT, chúng ta đầu tiên mô tả một trò chơi mô phỏng \( Game_{sim} \). \( Game_{sim} \) giống như trò chơi thực tế \( Game_{real} \) với hai khác biệt. Tất cả các câu trả lời được tính toán độc lập với bit \( b \) và được gửi đến \( \mathcal{A} \), sao cho lợi thế của \( \mathcal{A} \) trong \( Game_{sim} \) là 0. Các khóa zk-SNARK được tạo như sau:

\[
(pk_{SP\_END}, vk_{SP\_END}, trap) \leftarrow Sim(1^\lambda, CSP\_END)
\]

trong đó \( trap \) là chìa khóa lỗ hổng không-kiến thức. Sau đó, chúng ta chứng minh rằng \( Adv_{L-IND}^{\Pi,\mathcal{A}}(\lambda) = 2 \cdot \Pr[MCCT\text{-}IND_{\Pi,\mathcal{A}}(\lambda) = 1] - 1 \) là khác biệt không đáng kể so với \( Adv_{Game_{sim}}^{\Pi,\mathcal{A}}(\lambda) \) (lợi thế của \( \mathcal{A} \) trong \( Game_{sim} \)).

Người thách đấu \( \mathcal{C} \) trả lời các truy vấn như sau:

- **Truy Vấn KeyGen:** \( \mathcal{C} \) hoạt động giống như trong \( L-IND \) với các khác biệt sau: \( \mathcal{C} \) lấy \( (apk, ask) \leftarrow KeyGen(pp) \) và sử dụng một chuỗi ngẫu nhiên để thay thế \( apk \). Sau đó, \( \mathcal{C} \) gửi \( apk \) cho \( \mathcal{A} \).

- **Truy Vấn Mint:** \( \mathcal{C} \) hoạt động giống như trong \( L-IND \) với các khác biệt sau: Thuật toán Mint sử dụng một chuỗi ngẫu nhiên \( \rho \) để thay thế \( apk \), khi tính cam kết \( Hash(v || \rho) \).

- **Truy Vấn Transfer:** \( \mathcal{C} \) hoạt động giống như trong \( L-IND \) với các khác biệt sau: \( \mathcal{C} \) sử dụng các chuỗi ngẫu nhiên để thay thế \( snin \) và \( CoutS \) tương ứng.

- **Truy Vấn Insert:** \( \mathcal{C} \) hoạt động giống như trong \( L-IND \).

Để chứng minh tính không phân biệt sổ cái, một chuỗi các trò chơi lai ghép được định nghĩa dưới đây. Để tiện lợi, chúng ta định nghĩa \( q_{KG} \) là số lần \( \mathcal{A} \) yêu cầu truy vấn KeyGen, \( q_T \) là số lần \( \mathcal{A} \) yêu cầu truy vấn Transfer, và \( q_M \) là số lần \( \mathcal{A} \) yêu cầu truy vấn Mint.

### Game1

**Game1** giống như \( Game_{real} \) ngoại trừ việc mô phỏng mỗi chứng minh zk-SNARK. \( \mathcal{C} \) đầu tiên lấy \( (pk_{SP\_END}, vk_{SP\_END}, trap) \leftarrow Sim(1^\lambda, CSP\_END) \). Sau đó, \( \mathcal{C} \) tính \( \pi_{SP\_END} \leftarrow Sim(trap, \vec{s}) \) mà không sử dụng bất kỳ chứng từ nào. \( \pi_{SP\_END} \) giống hệt các chứng minh được tạo ra trong \( Game_{real} \) do tính không-kiến thức hoàn hảo của zk-SNARK. Do đó, lợi thế của \( \mathcal{A} \) trong \( Game1 \), \( Adv_{Game1} = 0 \).

### Game2

**Game2** giống như Game1 ngoại trừ việc thay thế số seri \( snin \) và khóa công khai \( apk \) của đồng tiền được ánh xạ bằng các chuỗi ngẫu nhiên tương ứng. Để giải thích, hãy để \( Adv_{PRF} \) là lợi thế của \( \mathcal{A} \) trong việc phân biệt hàm giả ngẫu nhiên \( PRF \) với một hàm ngẫu nhiên. Trong truy vấn KeyGen, \( apk \) được tính như sau:

\[
apk = Hash_{p}(ask)
\]

trong đó \( Hash \) là một hàm giả ngẫu nhiên.

*(Tiếp tục phần này nếu cần thiết)*

## Thuật Toán 3: Thí Nghiệm

```plaintext:algorithms/mcct_algorithm3
Algorithm 3 Experiments

L-IND(λ):
    pp ← Setup(λ)
    (L0, L1) ← A MCCT0, MCCT1 (pp)
    randomly sample b ← {0, 1}
    Q ← {KeyGen, Mint, Transfer, Insert}
    ans(ab, a1−b) ← QueryLb (Q)
    b′ ← A MCCT0, MCCT1 (L0, L1, ans)
    return b = b′

TR-NM(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    TX′ ← A MCCT (L)
    b′ ← VerifyTransaction(TX′, L′) ∧ (TX ∉ L′)
    return b ∧ (∃ TX ∈ L : (TX ≠ TX′) ∧ (TX.s_n = TX′.s_n))

BAL(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    (CMLListS, vS_Mint, vS_Reci, vS_Send) ← A MCCT (L)
    (vS_Unspent, vS_Pub) ← Compute(L, CMLListS)
    If vS_Unspent + vS_Pub + vS_Send > vS_Mint + vS_Reci Then
        return 1
    Else return 0
```

## Các Điều Kiện Trong MCCT

Chứng minh zk-SNARK \( \pi_{SP\_END} \) trong **MCCT** chứng minh rằng tuyên bố \( \vec{s} = (rtS, snin, CoutS, vpup) \) và chứng từ \( \vec{w} = (Cins, sin, sout, vin, vout, ainpk, ainsk, aoutpk, pin, path(Cins)) \) thỏa mãn quan hệ \( RSP\_END \):

- **Các đồng tiền được ánh xạ được hình thành đúng cách:**
    - \( Cins = Hashs(in, pk) \)
    - và đối với \( CoutS \) thì \( CoutS = Hashs(out, pk) \).

- **Khóa riêng của đồng tiền đầu vào phù hợp với khóa công khai:**
    - \( ainpk = Hashpin(ainsk) \).

- **Cam kết đồng tiền đầu vào \( CinsS \) là một nút lá của cây Merkle với gốc \( rtS \):**
    - \( path(CinsS) \) là hợp lệ.

- **Số seri được tính toán chính xác:**
    - \( sninS = Hashask(CinsS) \).

- **Giá trị đầu vào bằng giá trị đầu ra:**
    - \( vin = vout + vpup \).

- **Tất cả các giá trị không âm:**
    - \( vin \geq 0 \), \( vout \geq 0 \), \( vpup \geq 0 \).

## 6.3. Giao Thức Trao Đổi Nguyên Tử Tiền Điện Tử Được Ánh Xạ

Để thuận tiện cho việc minh họa, chúng tôi giả định rằng **Pa** muốn trao đổi **va** bitcoins được ánh xạ lấy **vb** ethers được ánh xạ với **Pb**.

**Hình 6. Giao thức trao đổi nguyên tử tiền điện tử được ánh xạ**

*(Chú ý: Hình 6 được đề cập nhưng nội dung hình ảnh không được cung cấp trong văn bản.)*

## 7. Phân Tích Bảo Mật

Phân tích các đặc tính bảo mật của sơ đồ chúng tôi được trình bày trong phần này, bao gồm: không phân biệt giao dịch, ẩn danh, không thể tạo giả, và cân bằng.

### Định Lý 1. (Không Phân Biệt Giao Dịch)

Dựa trên tính ẩn hoàn hảo của sơ đồ cam kết Pedersen, sơ đồ đề xuất của chúng tôi thỏa mãn đặc tính không phân biệt giao dịch.

**Chứng Minh:**

Trong pha Khóa và pha Giải Phóng, tập địa chỉ công khai \( \{PSpk,1, PSpk,2, ..., PSpk,n, ISpk,1, ISpk,2, ..., ISpk,m\} \) của người gửi và trung gian và tổng giá trị của các giao dịch là không xác định đối với các người tham gia khác. Chỉ có các cam kết được công khai nộp cho hợp đồng giao dịch. Các cam kết của địa chỉ công khai và tổng giá trị của các giao dịch được tính như sau:

- \( com_i = COMri(PSpk,i) = g^{PSpk,i^{h_r}} \),
- \( com_j = COMrj(ISpk,j) = g^{PSpk,j^{h_{rj}}} \),
- \( com_v = COMrv(vt) = g^{vth_{rv}} \).

Vì \( com_i \), \( com_j \) và \( com_v \) là cam kết Pedersen, dựa trên tính ẩn hoàn hảo của giao thức cam kết Pedersen, địa chỉ công khai của người gửi và trung gian không thể phân biệt từ các địa chỉ công khai khác trong blockchain nguồn, và tổng giá trị của các giao dịch được ẩn hoàn hảo. Do đó, đặc tính không phân biệt giao dịch được thỏa mãn.

### Thuật Toán 3: Thí Nghiệm

```plaintext:algorithms/mcct_algorithm3
Algorithm 3 Experiments

L-IND(λ):
    pp ← Setup(λ)
    (L0, L1) ← A MCCT0, MCCT1 (pp)
    randomly sample b ← {0, 1}
    Q ← {KeyGen, Mint, Transfer, Insert}
    ans(ab, a1−b) ← QueryLb (Q)
    b′ ← A MCCT0, MCCT1 (L0, L1, ans)
    return b = b′

TR-NM(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    TX′ ← A MCCT (L)
    b′ ← VerifyTransaction(TX′, L′) ∧ (TX ∉ L′)
    return b ∧ (∃ TX ∈ L : (TX ≠ TX′) ∧ (TX.s_n = TX′.s_n))

BAL(λ):
    pp ← Setup(λ)
    L ← A MCCT (pp)
    (CMLListS, vS_Mint, vS_Reci, vS_Send) ← A MCCT (L)
    (vS_Unspent, vS_Pub) ← Compute(L, CMLListS)
    If vS_Unspent + vS_Pub + vS_Send > vS_Mint + vS_Reci Then
        return 1
    Else return 0
```

## 7. Kết Luận

Phần này đã trình bày chi tiết về **sơ đồ giao dịch bảo mật tiền điện tử được ánh xạ (MCCT)**, bao gồm các thuật toán chính như **Setup**, **KeyGen**, **Mint**, **Transfer**, **Redeem**, và **Exchange**. **MCCT** được xây dựng trên nền tảng hợp đồng thông minh giao dịch **SCt**, bao gồm các hợp đồng trung gian, cây Merkle, và hợp đồng trộn để đảm bảo tính bảo mật và riêng tư trong các giao dịch tiền điện tử giữa các blockchain khác nhau.

Nếu bạn cần thêm thông tin hoặc giải thích chi tiết hơn về bất kỳ phần nào, hãy cho tôi biết!





