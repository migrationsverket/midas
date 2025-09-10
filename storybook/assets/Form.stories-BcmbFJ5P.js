import{j as n}from"./iframe-CXjCNx0l.js";import{$ as j}from"./Form-DNzuuTqP.js";import{G}from"./Grid-DNm2E2Gi.js";import{G as e}from"./GridItem-Cqft9l13.js";import{T as r}from"./TextField-BCIalkFS.js";import{S as I}from"./Select-j8ENQpks.js";import{B as a}from"./Button-CbPqDcXI.js";import{R as g,a as b}from"./Radio-BAA821LF.js";import{C as h}from"./CheckboxGroup-Br0tzvbL.js";import{C as k}from"./Checkbox-CAB1nw16.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BbWY8Vyb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DL0B0bI0.js";import"./useFocusRing-DVXP1IhH.js";import"./index-DtC3k5yu.js";import"./index-Cuq6af5k.js";import"./TextFieldBase-BUpP1ci8.js";import"./TextField-dZyoCcKh.js";import"./FieldError-D-NkSBZy.js";import"./Text-BHohIio1.js";import"./Text-C68zGEox.js";import"./ListKeyboardDelegate-ZpQy-Xml.js";import"./SelectionManager-qUhunXAP.js";import"./useEvent-D3njUTRX.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Cw8qdGK5.js";import"./useDescription-DekgOUG-.js";import"./useControlledState-CV6cqftQ.js";import"./Group-DXuHGJyu.js";import"./Input-QSXobea-.js";import"./Hidden-B8BU_fbZ.js";import"./Button-BEuK6UEX.js";import"./useLabels-BD9c1SEs.js";import"./useButton-85p1rmOu.js";import"./useTextField-D8u9cqcr.js";import"./useField-BHMdi8Cj.js";import"./TextField.module-8oYDuXgF.js";import"./Label-Bs9Y2Jl6.js";import"./Dialog-C2o-5LyN.js";import"./RSPContexts-CbNi_WJP.js";import"./OverlayArrow-BGO212SA.js";import"./useResizeObserver-DsQtPcbH.js";import"./Collection-7xG1n95F.js";import"./index-CAi8PhnT.js";import"./Separator-zFFkuoq2.js";import"./PressResponder-CkGbJnMG.js";import"./useLocalizedStringFormatter-CG08kz8C.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BPOXbc3q.js";import"./Dialog-Cr61nfKk.js";import"./useLocalizedStringFormatter-BbdtAyg0.js";import"./x-Dm2Q0WIf.js";import"./createLucideIcon-DjeFI8xK.js";import"./Heading-BV-Na1n2.js";import"./info-DR-857Bw.js";import"./Tag-D9Vxak6y.js";import"./ListBox-CYHkcrCo.js";import"./DragAndDrop-Dc6mxa7Q.js";import"./inertValue-Bicr_Bxv.js";import"./useListState-djJEsvY7.js";import"./useHighlightSelectionDescription-CbB8Yq6K.js";import"./useUpdateEffect-DJyH6iIa.js";import"./useHasTabbableChild-DNyiN0YF.js";import"./check-sTkP2jEu.js";import"./ListBoxSection-RtNNuDVm.js";import"./Virtualizer-BKQzyspU.js";import"./useObserveElement-CqEu4Cr7.js";import"./chevron-down-Bhf-WzYL.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-D_arTJFJ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
