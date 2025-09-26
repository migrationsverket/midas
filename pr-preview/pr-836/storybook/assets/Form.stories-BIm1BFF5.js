import{j as n}from"./iframe-D3TrqU1c.js";import{$ as j}from"./Form-CF9mj039.js";import{G}from"./Grid-D-vVccZE.js";import{G as e}from"./GridItem-D44TRwSv.js";import{T as r}from"./TextField-zcpKePw-.js";import{S as I}from"./Select-Bpq82g_B.js";import{B as a}from"./Button-DAXVNDDT.js";import{R as g,a as b}from"./Radio-CX9G0ZmA.js";import{C as h}from"./CheckboxGroup-BBsDl7Nu.js";import{C as k}from"./Checkbox-CR6Cirte.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DH3YZe7j.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C8DRcTQB.js";import"./useFocusRing-9Tni2VRz.js";import"./index-DA8fU_Zp.js";import"./index-KBbZ-VWL.js";import"./TextFieldBase-Do0Inqop.js";import"./TextField-C9VHwsnl.js";import"./FieldError-DY9oe_Br.js";import"./Text-Rv0spGwe.js";import"./Text-5tKthnyR.js";import"./ListKeyboardDelegate-BkDBPCY4.js";import"./SelectionManager-t9MucCT5.js";import"./useEvent-CixFMpwD.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CdLzvWGj.js";import"./useDescription-CBU6eYYQ.js";import"./useControlledState-DBdHwHLf.js";import"./Group-DNVSBu_u.js";import"./Input-iBWrrVI5.js";import"./Hidden-CiZTgx3K.js";import"./Button-BB_SyN75.js";import"./useLabels-CCF8-s-s.js";import"./useButton-bB-Pq-IM.js";import"./useTextField-XMaeDOBr.js";import"./useField-BPAirKev.js";import"./TextField.module-DjUItNl5.js";import"./Label-IsyvcP3t.js";import"./Dialog-uDq-rWTZ.js";import"./RSPContexts-BTw2MfBE.js";import"./OverlayArrow-BVtw26J1.js";import"./useResizeObserver-DB4q1KrY.js";import"./Collection-A_ofS0d9.js";import"./index-GizOCmZ1.js";import"./Separator-C90YACU7.js";import"./PressResponder-DqNN9OkN.js";import"./useLocalizedStringFormatter-BGOelFld.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DoDGUYcg.js";import"./Dialog-CY-kAm0O.js";import"./useLocalizedStringFormatter-DcRRARRQ.js";import"./x-6JXMEAe5.js";import"./createLucideIcon-DvAjTehV.js";import"./Heading-B-61hkyg.js";import"./info-C_NKxnc6.js";import"./Tag-CGPJqNkD.js";import"./ListBox-DfMwNMcQ.js";import"./DragAndDrop-CEmrxVkk.js";import"./inertValue-D-1o5AOi.js";import"./useListState-C1AqbmyA.js";import"./useHighlightSelectionDescription-sUp8ozt_.js";import"./useUpdateEffect-CMNsjFdE.js";import"./useHasTabbableChild-B8SDQSHL.js";import"./check-Ck3jsW5K.js";import"./ListBoxSection-YVzMc31m.js";import"./Virtualizer-40P5O1FO.js";import"./useObserveElement-KdXDvk4M.js";import"./chevron-down-Dq_HJUPw.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DGzmmblN.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
