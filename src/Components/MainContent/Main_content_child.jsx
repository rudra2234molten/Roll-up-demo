import React from "react";

const Main_content_child = (props) => {
  return (
    <>
      {props.content.map((data) => {
        let { img, para, paragr, see } = data;

        return (
          <>
            <section>
              <div>
                <article>
                  <div className="global">
                    <img src={img} alt="" />
                  </div>
                  <h2>{para}</h2>
                  <p className="par">{paragr}</p>

                  <div className="see">
                    <p className="more">
                      {see}
                      <span>
                        <img src="../download (5).svg" alt="" />
                      </span>
                    </p>
                  </div>
                </article>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Main_content_child;
