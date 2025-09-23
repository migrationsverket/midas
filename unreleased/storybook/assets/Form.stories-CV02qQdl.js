import{j as n}from"./iframe-j2Dx5Y-4.js";import{$ as j}from"./Form-Bms8MCw-.js";import{G}from"./Grid-DfoOEAiJ.js";import{G as e}from"./GridItem-DwJMA7Q-.js";import{T as r}from"./TextField-Cb2g_pva.js";import{S as I}from"./Select-BbODvWAV.js";import{B as a}from"./Button-C_WAZy9A.js";import{R as g,a as b}from"./Radio-D5ng0ACW.js";import{C as h}from"./CheckboxGroup-BvXqkRQc.js";import{C as k}from"./Checkbox-DUV8Cciw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B0nzNvVJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BlgdrZXp.js";import"./useFocusRing-PcupjTzU.js";import"./index-CCGVMPzG.js";import"./index-BIVv3bnj.js";import"./TextFieldBase-BvHo_WlY.js";import"./TextField-CYx2BNyC.js";import"./FieldError-Bm1F43Q1.js";import"./Text-BxSpdCwn.js";import"./Text-CBH0JHvG.js";import"./ListKeyboardDelegate-BlYGuF5L.js";import"./SelectionManager-Bpw_6JRk.js";import"./useEvent-49HBqs5R.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-nfrS-S4O.js";import"./useDescription-Cu2eG6Z_.js";import"./useControlledState-StBIZokn.js";import"./Group-vjsm7Yfs.js";import"./Input-CwVZ6BCm.js";import"./Hidden-b03d5gYU.js";import"./Button-CUyngJAg.js";import"./useLabels-CF2XNNk4.js";import"./useButton-BbysI9wS.js";import"./useTextField-Bastm8t4.js";import"./useField-DxXF3O-C.js";import"./TextField.module-DjUItNl5.js";import"./Label-tQxtmRwl.js";import"./Dialog-BbNqarK4.js";import"./RSPContexts-BbMTwzuM.js";import"./OverlayArrow-hhsAdNyB.js";import"./useResizeObserver-V62wrACV.js";import"./Collection-BbeZ8NYx.js";import"./index-CsQSz0DR.js";import"./Separator-fbQyXxHh.js";import"./PressResponder-_6E4OfKl.js";import"./useLocalizedStringFormatter-DjjjWSji.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cqtn7rDR.js";import"./Dialog-DL8q9cuf.js";import"./useLocalizedStringFormatter-7VrIb8Ny.js";import"./x-mE1eLeIe.js";import"./createLucideIcon-1jcyqG0W.js";import"./Heading-CMNGrMqW.js";import"./info-BNroYwzC.js";import"./Tag-BuXxdie3.js";import"./ListBox-4_Mv-PRC.js";import"./DragAndDrop-BNdaRMtx.js";import"./inertValue-D2TP7Dss.js";import"./useListState-Bgm_3ACX.js";import"./useHighlightSelectionDescription-Dc7Oy0Zp.js";import"./useUpdateEffect-XplJPIln.js";import"./useHasTabbableChild-It-itWiZ.js";import"./check-8Vy5nOs2.js";import"./ListBoxSection-ChcYIvEQ.js";import"./Virtualizer-CpCysHcJ.js";import"./useObserveElement-Cc2VRqPk.js";import"./chevron-down-veS2qnuR.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CbMlayE7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
