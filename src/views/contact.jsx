import MakeCenter from "../components/make-center";
const Contact = () => {
  return (
    <div id="contact">
      <MakeCenter>
        <h1 className="text-3xl lg:text-5xl font-extrabold pt-20 pb-5">
          Let&apos;s Connect
        </h1>
        <a href="mailto:bhargav.pavan.025@gmail.com">
          {" "}
          <p className="pb-10 ">bhargav.pavan.025@gmail.com</p>
        </a>
        <div className="flex flex-wrap justify-center items-center gap-16 ">

          {/* linkedIn */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/kumar-penke"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.8805 5.16687H9.11879C8.62687 5.16003 8.13842 5.25017 7.68133 5.43213C7.22425 5.61409 6.80749 5.88431 6.45485 6.22735C6.10221 6.5704 5.8206 6.97955 5.6261 7.43144C5.4316 7.88333 5.32803 8.36911 5.32129 8.86103V53.1394C5.32803 53.6313 5.4316 54.1171 5.6261 54.5689C5.8206 55.0208 6.10221 55.43 6.45485 55.773C6.80749 56.1161 7.22425 56.3863 7.68133 56.5683C8.13842 56.7502 8.62687 56.8404 9.11879 56.8335H52.8805C53.3724 56.8404 53.8608 56.7502 54.3179 56.5683C54.775 56.3863 55.1918 56.1161 55.5444 55.773C55.897 55.43 56.1787 55.0208 56.3732 54.5689C56.5677 54.1171 56.6712 53.6313 56.678 53.1394V8.86103C56.6712 8.36911 56.5677 7.88333 56.3732 7.43144C56.1787 6.97955 55.897 6.5704 55.5444 6.22735C55.1918 5.88431 54.775 5.61409 54.3179 5.43213C53.8608 5.25017 53.3724 5.16003 52.8805 5.16687ZM20.8988 48.4119H13.1488V25.1619H20.8988V48.4119ZM17.0238 21.9069C15.955 21.9069 14.9299 21.4823 14.1741 20.7265C13.4184 19.9707 12.9938 18.9457 12.9938 17.8769C12.9938 16.808 13.4184 15.783 14.1741 15.0272C14.9299 14.2715 15.955 13.8469 17.0238 13.8469C17.5913 13.7825 18.1661 13.8387 18.7104 14.0119C19.2547 14.1851 19.7563 14.4712 20.1823 14.8517C20.6084 15.2321 20.9492 15.6983 21.1826 16.2196C21.416 16.7409 21.5367 17.3057 21.5367 17.8769C21.5367 18.448 21.416 19.0128 21.1826 19.5341C20.9492 20.0554 20.6084 20.5216 20.1823 20.902C19.7563 21.2825 19.2547 21.5687 18.7104 21.7418C18.1661 21.915 17.5913 21.9712 17.0238 21.9069ZM48.8505 48.4119H41.1005V35.9344C41.1005 32.8085 39.9896 30.7677 37.1738 30.7677C36.3023 30.7741 35.4538 31.0474 34.7425 31.5509C34.0311 32.0544 33.4912 32.7638 33.1955 33.5835C32.9933 34.1907 32.9057 34.8302 32.9371 35.4694V48.386H25.1871C25.1871 48.386 25.1871 27.2544 25.1871 25.136H32.9371V28.4169C33.6412 27.1952 34.6651 26.1888 35.8988 25.506C37.1324 24.8231 38.5289 24.4898 39.938 24.5419C45.1046 24.5419 48.8505 27.8744 48.8505 35.0302V48.4119Z"
                fill="black"
              />
            </svg>
          </a>
          {/* github */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bhargav02550"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.9999 2.63135C15.8053 2.63135 1.8623 16.5713 1.8623 33.7689C1.8623 47.5268 10.7842 59.198 23.1561 63.3158C24.7117 63.6045 25.283 62.6403 25.283 61.8179C25.283 61.0754 25.2541 58.6226 25.2407 56.0207C16.5782 57.9043 14.7504 52.3469 14.7504 52.3469C13.3339 48.7478 11.2931 47.7908 11.2931 47.7908C8.46746 45.8583 11.506 45.8985 11.506 45.8985C14.6323 46.1176 16.2792 49.1072 16.2792 49.1072C19.0563 53.8664 23.5634 52.4907 25.3403 51.6956C25.6197 49.6832 26.4267 48.309 27.3172 47.5315C20.4011 46.7451 13.1303 44.0747 13.1303 32.1437C13.1303 28.7441 14.3471 25.9665 16.339 23.7854C16.0152 23.0016 14.9494 19.8347 16.6401 15.5457C16.6401 15.5457 19.2543 14.7088 25.2046 18.7374C27.6889 18.047 30.3532 17.7 32.9999 17.6881C35.645 17.7 38.3108 18.046 40.7997 18.7364C46.7428 14.7078 49.3539 15.5447 49.3539 15.5447C51.0488 19.8331 49.983 23.0006 49.6597 23.7843C51.6562 25.9654 52.8643 28.7431 52.8643 32.1426C52.8643 44.102 45.5801 46.7348 38.6465 47.5062C39.7638 48.4725 40.759 50.3679 40.759 53.2724C40.759 57.4387 40.7229 60.7918 40.7229 61.8174C40.7229 62.646 41.2839 63.6169 42.8617 63.3111C55.2264 59.1892 64.1379 47.5217 64.1379 33.7689C64.1374 16.5723 50.196 2.63135 32.9999 2.63135Z"
                fill="#181616"
              />
              <path
                d="M13.6558 47.3376C13.5872 47.4923 13.3438 47.5387 13.1221 47.433C12.8952 47.332 12.7689 47.1211 12.8421 46.9659C12.9091 46.806 13.153 46.7622 13.3783 46.8689C13.6052 46.9705 13.7341 47.1835 13.6552 47.3382L13.6558 47.3376ZM14.917 48.7448C14.769 48.8825 14.4787 48.8185 14.2817 48.6004C14.0775 48.3838 14.0394 48.0935 14.1905 47.9538C14.3441 47.8167 14.6256 47.8816 14.8298 48.0982C15.033 48.3178 15.0732 48.6056 14.9175 48.7453L14.917 48.7448ZM16.1452 50.5376C15.9544 50.6706 15.6419 50.5464 15.4491 50.2695C15.2583 49.9921 15.2583 49.6595 15.4543 49.527C15.6466 49.394 15.9544 49.5141 16.1503 49.7884C16.3401 50.0694 16.3401 50.4025 16.1452 50.5376ZM17.8266 52.2706C17.6565 52.4588 17.2925 52.4083 17.0264 52.152C16.7547 51.9009 16.6789 51.5436 16.8495 51.3559C17.0228 51.1672 17.3884 51.2198 17.656 51.4745C17.9277 51.7251 18.0097 52.0829 17.8277 52.2701L17.8266 52.2706ZM20.147 53.2766C20.0712 53.5205 19.7216 53.6314 19.3684 53.5272C19.0162 53.4205 18.7857 53.1353 18.8579 52.8889C18.9301 52.6429 19.2823 52.5279 19.6375 52.6388C19.9897 52.745 20.2202 53.0286 20.147 53.2766ZM22.6957 53.4627C22.7045 53.7195 22.4054 53.932 22.0357 53.9371C21.6629 53.9459 21.3613 53.7376 21.3576 53.4849C21.3576 53.2256 21.6505 53.0157 22.0228 53.0085C22.3925 53.0018 22.6962 53.208 22.6962 53.4622L22.6957 53.4627ZM25.0665 53.0595C25.1109 53.3096 24.8536 53.5669 24.4859 53.6355C24.125 53.7025 23.7898 53.5468 23.7434 53.2988C23.6991 53.042 23.961 52.7847 24.322 52.7182C24.6901 52.6548 25.0201 52.8053 25.0665 53.0595Z"
                fill="#181616"
              />
            </svg>
          </a>
          {/* whatsapp */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+919133485888"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.8336 16.9207C56.8046 15.8061 56.7184 14.6938 56.5753 13.5882C56.3824 12.6197 56.061 11.6814 55.6195 10.7982C55.1577 9.84002 54.5377 8.96666 53.7853 8.21484C53.026 7.47136 52.1542 6.85236 51.202 6.38067C50.3175 5.94782 49.3792 5.63505 48.412 5.45067C47.3168 5.28663 46.2124 5.19172 45.1053 5.1665H16.9212C15.8066 5.19553 14.6943 5.28176 13.5887 5.42484C12.6202 5.61773 11.6819 5.93919 10.7987 6.38067C9.84051 6.84241 8.96714 7.4625 8.21533 8.21484C7.47185 8.97411 6.85285 9.84594 6.38116 10.7982C5.94831 11.6826 5.63554 12.6209 5.45116 13.5882C5.28712 14.6833 5.19221 15.7877 5.16699 16.8948C5.16699 17.3857 5.16699 18.0832 5.16699 18.2898V43.7098C5.16699 43.994 5.16699 44.614 5.16699 45.079C5.19602 46.1935 5.28224 47.3058 5.42533 48.4115C5.61822 49.3799 5.93968 50.3182 6.38116 51.2015C6.8429 52.1596 7.46299 53.033 8.21533 53.7848C8.97459 54.5283 9.84643 55.1473 10.7987 55.619C11.6831 56.0518 12.6214 56.3646 13.5887 56.549C14.6838 56.713 15.7882 56.8079 16.8953 56.8332H45.0795C46.194 56.8041 47.3063 56.7179 48.412 56.5748C49.3804 56.3819 50.3187 56.0605 51.202 55.619C52.1601 55.1573 53.0335 54.5372 53.7853 53.7848C54.5288 53.0256 55.1478 52.1537 55.6195 51.2015C56.0523 50.3171 56.3651 49.3788 56.5495 48.4115C56.7135 47.3163 56.8084 46.2119 56.8336 45.1048C56.8336 44.614 56.8336 43.994 56.8336 43.7098V18.2898C56.8336 18.0832 56.8336 17.3857 56.8336 16.9207ZM31.5945 49.0832C28.4921 49.0679 25.4439 48.2681 22.7337 46.7582L12.917 49.3415L15.5003 39.7315C13.8344 36.9323 12.9428 33.7405 12.917 30.4832C12.9273 26.8224 14.0206 23.2465 16.0593 20.2059C18.0979 17.1653 20.9907 14.796 24.3734 13.3963C27.756 11.9966 31.4772 11.6292 35.0683 12.3403C38.6593 13.0514 41.9597 14.8092 44.5536 17.3924C47.1475 19.9756 48.9191 23.2686 49.6451 26.8566C50.3712 30.4447 50.0192 34.1674 48.6336 37.5558C47.248 40.9443 44.8907 43.8469 41.8586 45.8982C38.8265 47.9495 35.2552 49.0577 31.5945 49.0832ZM31.5945 15.164C28.8557 15.1953 26.1741 15.9519 23.8227 17.3566C21.4713 18.7613 19.5341 20.764 18.2084 23.1608C16.8827 25.5576 16.2158 28.2628 16.2755 31.0012C16.3353 33.7395 17.1196 36.4132 18.5487 38.7498L18.9103 39.344L17.3603 45.0015L23.2503 43.3998L23.8187 43.7357C26.1684 45.1197 28.8417 45.8593 31.5687 45.8798C35.6795 45.8798 39.622 44.2468 42.5288 41.34C45.4356 38.4332 47.0686 34.4907 47.0686 30.3798C47.0686 26.269 45.4356 22.3265 42.5288 19.4197C39.622 16.5129 35.6795 14.8798 31.5687 14.8798L31.5945 15.164ZM40.6362 37.174C40.2978 37.7384 39.8447 38.2254 39.3063 38.6037C38.7678 38.9819 38.156 39.2429 37.5103 39.3698C36.5455 39.5462 35.5523 39.4841 34.617 39.189C33.737 38.9139 32.8743 38.5861 32.0337 38.2073C28.84 36.6048 26.1164 34.2016 24.1287 31.2323C23.0485 29.8566 22.3931 28.1958 22.2428 26.4532C22.2274 25.7293 22.3644 25.0103 22.6447 24.3427C22.9251 23.6751 23.3427 23.074 23.8703 22.5782C24.0257 22.402 24.2164 22.2603 24.43 22.1624C24.6436 22.0645 24.8754 22.0125 25.1103 22.0098H25.8337C26.1178 22.0098 26.5053 22.0098 26.867 22.8107C27.2287 23.6115 28.1845 26.014 28.3137 26.2465C28.3771 26.3704 28.4102 26.5077 28.4102 26.6469C28.4102 26.7862 28.3771 26.9234 28.3137 27.0473C28.1995 27.3281 28.0426 27.5895 27.8487 27.8223C27.6162 28.1065 27.3578 28.4423 27.1512 28.649C26.9445 28.8557 26.6862 29.114 26.9445 29.579C27.6474 30.7652 28.5174 31.8441 29.5278 32.7823C30.6281 33.7546 31.8862 34.5321 33.2478 35.0815C33.7128 35.314 33.997 35.2882 34.2553 35.0815C34.5137 34.8748 35.4178 33.7382 35.7278 33.2732C36.0378 32.8082 36.3478 32.8857 36.7612 33.0407C37.1745 33.1957 39.4737 34.3065 39.9387 34.539C40.4037 34.7715 40.6878 34.8748 40.817 35.0815C40.929 35.7576 40.8668 36.4511 40.6362 37.0965V37.174Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </MakeCenter>
    </div>
  );
};

export default Contact;