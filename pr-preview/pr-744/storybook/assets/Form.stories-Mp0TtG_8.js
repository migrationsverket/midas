import{j as n}from"./iframe-BElIAnPv.js";import{$ as j}from"./Form-XhCe9EII.js";import{G}from"./Grid-DlF7zyhO.js";import{G as e}from"./GridItem-Dy5O3Ho2.js";import{T as r}from"./TextField-Cjx697Fr.js";import{S as I}from"./Select-qMwLB8Wa.js";import{B as a}from"./Button-CkCVPfUp.js";import{R as g,a as b}from"./Radio-D6e_7Q3M.js";import{C as h}from"./CheckboxGroup-Buf9bBRq.js";import{C as k}from"./Checkbox-B_shp3iv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DEtF3URH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-xAdOuDSE.js";import"./useFocusRing-BnxhOqqJ.js";import"./index-BS1ogt4r.js";import"./index-BXfk70AB.js";import"./TextFieldBase-CycP0YfB.js";import"./TextField-r_xqA1wJ.js";import"./FieldError-iX6PIkSH.js";import"./Text-C_LFIXGv.js";import"./Text-By-OoJkp.js";import"./ListKeyboardDelegate-DHdbvgJ9.js";import"./SelectionManager-D4dsD9og.js";import"./useEvent-DDHuJDZ3.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-3DSnSsZ1.js";import"./useDescription-DaEFE4E2.js";import"./useControlledState-Bx7NwNUp.js";import"./Group-AjyuIF_d.js";import"./Input-gSbPzWI6.js";import"./Hidden-C9eeNW5u.js";import"./Button-Bo4LLvWR.js";import"./useLabels-DI6GRJ43.js";import"./useButton-BLj7BdWG.js";import"./useTextField-iZd8u7gi.js";import"./useField-Cbq2Nbha.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BP181i_t.js";import"./Dialog-CaqnVEuM.js";import"./RSPContexts-1R4Qkh6d.js";import"./OverlayArrow-DzHnPkzz.js";import"./useResizeObserver-DXWu2tMX.js";import"./Collection-DBhA2vri.js";import"./index-BZKZDdQI.js";import"./Separator-DgQrZmA1.js";import"./PressResponder-YbnczRnw.js";import"./useLocalizedStringFormatter-DuBO1bfJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CthYNxgg.js";import"./Dialog-CzZUNNS5.js";import"./useLocalizedStringFormatter-Rds67IGQ.js";import"./x-DM7BLOIe.js";import"./createLucideIcon--fT4h1UV.js";import"./Heading-D_rOFBCt.js";import"./info-B8qV8IKj.js";import"./Tag-BRRY0uk6.js";import"./ListBox-D7YwB6Vi.js";import"./DragAndDrop-C2T7C8v1.js";import"./inertValue-CwMdDAoc.js";import"./useListState-BAmJ2J13.js";import"./useHighlightSelectionDescription-D_LJBI9A.js";import"./useUpdateEffect-u4v55XLx.js";import"./useHasTabbableChild-DSVjxoIV.js";import"./check-OtZdsIsw.js";import"./ListBoxSection-CT26v5E7.js";import"./Virtualizer-CA8u6sok.js";import"./useObserveElement-vixPZ7L2.js";import"./chevron-down-Cs-vxMW9.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-BrNO8_Hd.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
