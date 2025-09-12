import{j as n}from"./iframe-DGxmGm2k.js";import{$ as j}from"./Form-BGTbBqxv.js";import{G}from"./Grid-GyJFJvNH.js";import{G as e}from"./GridItem-B-ZQAs_W.js";import{T as r}from"./TextField-BxMtD-hI.js";import{S as I}from"./Select--waRIZeX.js";import{B as a}from"./Button-DWM_iCLS.js";import{R as g,a as b}from"./Radio-6lKYYdFV.js";import{C as h}from"./CheckboxGroup-D5NnpcmW.js";import{C as k}from"./Checkbox-cCuq7mr0.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CTJYw7xC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZ9fMtDY.js";import"./useFocusRing-Ctph2xJj.js";import"./index-DtYTnSux.js";import"./index-Den8FIHV.js";import"./TextFieldBase-Fd9ZkBe5.js";import"./TextField-COruHKJn.js";import"./FieldError-Bffq4DyO.js";import"./Text-CqgNvp--.js";import"./Text-KuUZ-ECD.js";import"./ListKeyboardDelegate-BGoKWc32.js";import"./SelectionManager-iP4KS2g7.js";import"./useEvent-6tfisfNt.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CnCOnwye.js";import"./useDescription-BQDlG5ov.js";import"./useControlledState-CFAmB_GJ.js";import"./Group-WoXkzsci.js";import"./Input-DOzzFC1B.js";import"./Hidden-DKWNQnBF.js";import"./Button-Cj8RLJ9E.js";import"./useLabels-DViJ-T_X.js";import"./useButton-BNBE4-uU.js";import"./useTextField-ohjFo6Eq.js";import"./useField-B-eiGO04.js";import"./TextField.module-DjUItNl5.js";import"./Label-CF-zUQpL.js";import"./Dialog-Cm35oSWN.js";import"./RSPContexts-BGWtS-ZA.js";import"./OverlayArrow-dHlFRFes.js";import"./useResizeObserver-D4R841j5.js";import"./Collection-VbYSEipo.js";import"./index-DgF27tkm.js";import"./Separator-DhExJUxr.js";import"./PressResponder-BAfWmHEl.js";import"./useLocalizedStringFormatter-CVIZ2hSR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C_CgKo_k.js";import"./Dialog-BtvM8_80.js";import"./useLocalizedStringFormatter-CREdzAhu.js";import"./x-B2Ln-KY7.js";import"./createLucideIcon-Biu0nL5z.js";import"./Heading-CLjseAvX.js";import"./info-DcHVO-pP.js";import"./Tag-Bvh9867O.js";import"./ListBox-DRX4WEjL.js";import"./DragAndDrop-BN_QrG8u.js";import"./inertValue-CiYjdjpT.js";import"./useListState-C4bCs2JN.js";import"./useHighlightSelectionDescription-CB5VMxCu.js";import"./useUpdateEffect-BE4DYrr-.js";import"./useHasTabbableChild-BwW6SxXO.js";import"./check-CsjeofY8.js";import"./ListBoxSection-Dp8f5APe.js";import"./Virtualizer-Cyw_1X94.js";import"./useObserveElement-DL5yfBu9.js";import"./chevron-down-DACcIDa_.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CuXX8Ryk.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
