const Awards = () => {
  return (
    <section className="bg-red-50">
      <div className="container bg-green-50 mx-auto px-8">
        <h2 className="text-5xl font-bold mb-6">Awards</h2>

        {/* cards container */}
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-8 p-24">
          {/* single card */}
          <div className="w-full bg-blue-50 flex flex-col justify-center items-center py-6 gap-y-6">
            <img
              className="w-[100px]"
              src="https://private-user-images.githubusercontent.com/86240715/365427224-6c545326-232f-4d77-abda-66d8dd1e4e97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3ODc2MjYsIm5iZiI6MTcyNTc4NzMyNiwicGF0aCI6Ii84NjI0MDcxNS8zNjU0MjcyMjQtNmM1NDUzMjYtMjMyZi00ZDc3LWFiZGEtNjZkOGRkMWU0ZTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA4VDA5MjIwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmOGJmOWY1NDE0MzE5MTc3MTUwN2U1M2E3ZjM2OWY1Nzc0ZWQ5Mzg1MzE0NTM2ODIxNDliYzhlYjNjMGU5ZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a6hqlbAvDLB8qMsuDVx_oX8bzFzdAmhOMBszLDQa7WA"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold">Winner</h2>
              <h3 className="text-2xl font-semibold">40,000 LKR</h3>
            </div>
          </div>
          <div className="w-full bg-blue-50 flex flex-col justify-center items-center py-6 gap-y-6">
            <img
              className="w-[100px]"
              src="https://private-user-images.githubusercontent.com/86240715/365427224-6c545326-232f-4d77-abda-66d8dd1e4e97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3ODc2MjYsIm5iZiI6MTcyNTc4NzMyNiwicGF0aCI6Ii84NjI0MDcxNS8zNjU0MjcyMjQtNmM1NDUzMjYtMjMyZi00ZDc3LWFiZGEtNjZkOGRkMWU0ZTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA4VDA5MjIwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmOGJmOWY1NDE0MzE5MTc3MTUwN2U1M2E3ZjM2OWY1Nzc0ZWQ5Mzg1MzE0NTM2ODIxNDliYzhlYjNjMGU5ZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a6hqlbAvDLB8qMsuDVx_oX8bzFzdAmhOMBszLDQa7WA"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold">Winner</h2>
              <h3 className="text-2xl font-semibold">40,000 LKR</h3>
            </div>
          </div>
          <div className="w-full bg-blue-50 flex flex-col justify-center items-center py-6 gap-y-6">
            <img
              className="w-[100px]"
              src="https://private-user-images.githubusercontent.com/86240715/365427224-6c545326-232f-4d77-abda-66d8dd1e4e97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU3ODc2MjYsIm5iZiI6MTcyNTc4NzMyNiwicGF0aCI6Ii84NjI0MDcxNS8zNjU0MjcyMjQtNmM1NDUzMjYtMjMyZi00ZDc3LWFiZGEtNjZkOGRkMWU0ZTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA4VDA5MjIwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmOGJmOWY1NDE0MzE5MTc3MTUwN2U1M2E3ZjM2OWY1Nzc0ZWQ5Mzg1MzE0NTM2ODIxNDliYzhlYjNjMGU5ZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a6hqlbAvDLB8qMsuDVx_oX8bzFzdAmhOMBszLDQa7WA"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold">Winner</h2>
              <h3 className="text-2xl font-semibold">40,000 LKR</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
