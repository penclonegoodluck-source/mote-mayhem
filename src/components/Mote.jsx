export default function Mote({
  character,
  pose = "",
  equipped = {},
  className = "",
}) {
  const c = character;

  const color =
    equipped["Body colors"] === "mint"
      ? "#76e5ba"
      : c.color;

  // CUSTOM UPLOADED CHARACTER
  if (c.image) {
    return (
      <svg
        className={`mote ${c.id} ${pose} ${className}`}
        viewBox="0 0 240 270"
        role="img"
        aria-label={`${c.name}, the ${c.role}`}
      >
        <defs>
          <clipPath id={`custom-clip-${c.id}`}>
            <rect
              x="55"
              y="35"
              width="130"
              height="195"
              rx="35"
            />
          </clipPath>

          <filter id={`custom-glow-${c.id}`}>
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse
          cx="120"
          cy="243"
          rx="69"
          ry="12"
          fill="#050c18"
          opacity=".4"
        />

        {/* Character body */}
        <g className="mote-body">

          {/* Floating animation */}
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -7; 0 0"
            dur="3s"
            repeatCount="indefinite"
          />

          {/* Back accessory: antenna */}
          {equipped["Back accessories"] === "antenna" && (
            <path
              d="M176 90 V38 l17 -12"
              stroke="#ffd17d"
              strokeWidth="5"
              fill="none"
            />
          )}

          {/* Back accessory: quantum pack */}
          {equipped["Back accessories"] === "pack" && (
            <g>
              <rect
                x="169"
                y="105"
                width="28"
                height="58"
                rx="8"
                fill="#384b61"
                stroke="#ffd17d"
                strokeWidth="3"
              />
              <path
                d="M176 115 h14 M176 128 h14 M176 141 h14"
                stroke="#ffd17d"
                strokeWidth="3"
              />
            </g>
          )}

          {/* Uploaded character */}
          <image
            href={c.image}
            x="55"
            y="35"
            width="130"
            height="195"
            preserveAspectRatio="xMidYMid meet"
            clipPath={`url(#custom-clip-${c.id})`}
          />

          {/* Footwear */}
          {equipped.Footwear === "boots" && (
            <g
              fill="#7cd7ed"
              stroke="#294b61"
              strokeWidth="2"
            >
              <rect
                x="71"
                y="229"
                width="37"
                height="15"
                rx="7"
              />
              <rect
                x="135"
                y="229"
                width="37"
                height="15"
                rx="7"
              />
            </g>
          )}

          {/* Prism visor */}
          {equipped.Visors === "prism" && (
            <path
              d="M78 111 h86"
              stroke="#a39aff"
              strokeWidth="7"
              strokeLinecap="round"
              opacity=".9"
            />
          )}

          {/* Sunset visor */}
          {equipped.Visors === "visor" && (
            <path
              d="M78 111 h86"
              stroke="#ff9e7e"
              strokeWidth="7"
              strokeLinecap="round"
              opacity=".9"
            />
          )}

          {/* Ability effect */}
          {equipped["Ability effects"] === "pulse" &&
            pose === "casting" && (
              <g
                fill="none"
                stroke="#e090f8"
                filter={`url(#custom-glow-${c.id})`}
              >
                <circle
                  cx="120"
                  cy="135"
                  r="94"
                  strokeWidth="3"
                  strokeDasharray="8 12"
                />

                <circle
                  cx="120"
                  cy="135"
                  r="78"
                  strokeWidth="3"
                  strokeDasharray="3 15"
                  opacity=".7"
                />

                <circle
                  cx="120"
                  cy="135"
                  r="60"
                  strokeWidth="2"
                  opacity=".45"
                />
              </g>
            )}

          {/* Victory animation */}
          {equipped["Victory animations"] === "dance" &&
            pose === "moving" && (
              <g
                fill="none"
                stroke="#ffac87"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M42 105 l-12 -10" />
                <path d="M198 105 l12 -10" />
                <path d="M45 145 l-15 5" />
                <path d="M195 145 l15 5" />
              </g>
            )}
        </g>
      </svg>
    );
  }

  // NORMAL BUILT-IN CHARACTER
  return (
    <svg
      className={`mote ${c.id} ${pose} ${className}`}
      viewBox="0 0 240 270"
      role="img"
      aria-label={`${c.name}, the ${c.role}`}
    >
      <defs>
        <linearGradient
          id={`body-${c.id}`}
          x2=".8"
          y2="1"
        >
          <stop stopColor={color} />
          <stop
            offset="1"
            stopColor={color}
            stopOpacity=".65"
          />
        </linearGradient>

        <linearGradient
          id={`glass-${c.id}`}
          x2="0"
          y2="1"
        >
          <stop stopColor="#263e56" />
          <stop
            offset="1"
            stopColor="#101d30"
          />
        </linearGradient>

        <filter id={`native-glow-${c.id}`}>
          <feGaussianBlur
            stdDeviation="4"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse
        cx="120"
        cy="243"
        rx="69"
        ry="12"
        fill="#050c18"
        opacity=".4"
      />

      <g className="mote-body">

        {/* Arms */}
        <g
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
        >
          <path d="M66 149 Q35 155 40 187" />
          <path d="M177 148 Q204 150 200 174" />
        </g>

        {/* Feet */}
        <g
          fill="#243343"
          stroke="#111e30"
          strokeWidth="5"
        >
          <path d="M83 210 L78 235 Q87 249 103 236 L104 209" />
          <path d="M136 210 L138 237 Q156 248 163 234 L158 208" />
        </g>

        {/* Footwear */}
        {equipped.Footwear === "boots" && (
          <g fill="#7cd7ed">
            <rect
              x="71"
              y="229"
              width="37"
              height="15"
              rx="7"
            />
            <rect
              x="135"
              y="229"
              width="37"
              height="15"
              rx="7"
            />
          </g>
        )}

        {/* Body */}
        <path
          d={
            c.id === "pip"
              ? "M115 48 Q131 41 146 67 L182 181 Q189 213 159 221 L82 221 Q52 213 61 182 L91 74 Q97 56 115 48"
              : c.id === "glitch"
              ? "M119 48 Q132 44 142 61 L188 132 Q202 152 186 174 L148 219 Q122 239 99 220 L55 170 Q41 151 54 131 L95 66 Q104 48 119 48"
              : c.id === "moss"
              ? "M66 78 Q64 58 86 57 L157 57 Q181 57 181 79 L190 190 Q194 222 167 225 L79 225 Q47 224 51 194 Z"
              : "M65 104 Q65 55 119 55 Q177 55 178 105 L183 185 Q184 222 148 226 L93 226 Q57 224 58 188 Z"
          }
          fill={`url(#body-${c.id})`}
          stroke={color}
          strokeWidth="3"
        />

        {/* Highlight */}
        <path
          d="M83 77 Q101 63 126 65"
          stroke="white"
          strokeWidth="5"
          opacity=".25"
          fill="none"
          strokeLinecap="round"
        />

        {/* Face */}
        <rect
          x="62"
          y="99"
          width="119"
          height="65"
          rx={c.id === "moss" ? 18 : 27}
          fill="#131e30"
          stroke="#3d556c"
          strokeWidth="6"
        />

        <rect
          x="69"
          y="105"
          width="105"
          height="50"
          rx="21"
          fill={`url(#glass-${c.id})`}
        />

        {/* Eyes */}
        <g
          className="eyes"
          stroke="#b0fcff"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <path d="M94 125 v8 M146 125 v8" />
        </g>

        {/* Mouth */}
        <path
          d="M110 146 Q120 151 130 144"
          fill="none"
          stroke="#75e8f0"
          strokeWidth="2"
        />

        <path
          d="M111 180 q10 8 20 0"
          fill="none"
          stroke="#182b3b"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Volt */}
        {c.id === "volt" && (
          <g>
            <path
              d="M120 54 V28 L134 21"
              fill="none"
              stroke="#86dbef"
              strokeWidth="6"
            />

            <circle
              cx="138"
              cy="20"
              r="7"
              fill="#d1fcad"
            />

            <path
              d="M84 201 h72"
              stroke="#34495e"
              strokeWidth="14"
            />

            <rect
              x="110"
              y="191"
              width="23"
              height="22"
              rx="4"
              fill="#d9e978"
            />

            <path
              d="m122 194 -6 9 h8 l-5 8"
              stroke="#34495e"
              fill="none"
              strokeWidth="2"
            />
          </g>
        )}

        {/* Pip */}
        {c.id === "pip" && (
          <>
            <path
              d="M104 61 86 31 120 48 144 29 139 60"
              fill="#ffbc83"
            />

            <path
              d="m64 179 113 26"
              stroke="#5b4953"
              strokeWidth="12"
            />

            <rect
              x="100"
              y="187"
              width="28"
              height="22"
              rx="5"
              fill="#f3cd9b"
            />
          </>
        )}

        {/* Glitch */}
        {c.id === "glitch" && (
          <>
            <path
              d="m72 89 -13 -22 30 10 M157 79 l26 -13 -9 30"
              fill="#dbc4ff"
            />

            <path
              d="m104 198 17 -13 17 13 -17 14Z"
              fill="#7257b3"
              stroke="#e6bfff"
              strokeWidth="2"
            />
          </>
        )}

        {/* Moss */}
        {c.id === "moss" && (
          <>
            <path
              d="M105 58 Q80 14 121 42 Q146 8 147 40 L126 60"
              fill="#7bb77b"
            />

            <rect
              x="63"
              y="186"
              width="117"
              height="32"
              rx="10"
              fill="#49675c"
            />

            <rect
              x="87"
              y="188"
              width="26"
              height="24"
              rx="6"
              fill="#a8c890"
            />

            <path
              d="M156 169 v14 m-7 -7 h14"
              stroke="#edffd2"
              strokeWidth="4"
            />
          </>
        )}

        {/* Back antenna */}
        {equipped["Back accessories"] === "antenna" && (
          <path
            d="M176 90 V38 l17 -12"
            stroke="#ffd17d"
            strokeWidth="5"
            fill="none"
          />
        )}

        {/* Quantum pack */}
        {equipped["Back accessories"] === "pack" && (
          <g>
            <rect
              x="169"
              y="105"
              width="28"
              height="58"
              rx="8"
              fill="#384b61"
              stroke="#ffd17d"
              strokeWidth="3"
            />

            <path
              d="M176 115 h14 M176 128 h14 M176 141 h14"
              stroke="#ffd17d"
              strokeWidth="3"
            />
          </g>
        )}

        {/* Prism visor */}
        {equipped.Visors === "prism" && (
          <path
            d="M78 111 h86"
            stroke="#bca6ff"
            strokeWidth="5"
          />
        )}

        {/* Sunset visor */}
        {equipped.Visors === "visor" && (
          <path
            d="M78 111 h86"
            stroke="#ff9e7e"
            strokeWidth="5"
          />
        )}

        {/* Ability effect */}
        {equipped["Ability effects"] === "pulse" &&
          pose === "casting" && (
            <g
              fill="none"
              stroke="#e090f8"
              filter={`url(#native-glow-${c.id})`}
            >
              <circle
                cx="120"
                cy="135"
                r="94"
                strokeWidth="3"
                strokeDasharray="8 12"
              />

              <circle
                cx="120"
                cy="135"
                r="78"
                strokeWidth="3"
                strokeDasharray="3 15"
                opacity=".7"
              />
            </g>
          )}

        {/* Victory animation */}
        {equipped["Victory animations"] === "dance" &&
          pose === "moving" && (
            <g
              fill="none"
              stroke="#ffac87"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <path d="M42 105 l-12 -10" />
              <path d="M198 105 l12 -10" />
              <path d="M45 145 l-15 5" />
              <path d="M195 145 l15 5" />
            </g>
          )}
      </g>
    </svg>
  );
}