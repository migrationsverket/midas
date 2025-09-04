import{j as n}from"./iframe-DWeIVeph.js";import{$ as j}from"./Form-CNAVmz7Z.js";import{G}from"./Grid-d7dBX45q.js";import{G as e}from"./GridItem-BV-6Zj-F.js";import{T as r}from"./TextField-DXuTm_XC.js";import{S as I}from"./Select-DVeKVHO1.js";import{B as a}from"./Button-BMeoJ3Wx.js";import{R as g,a as b}from"./Radio-D5-G1P3c.js";import{C as h}from"./CheckboxGroup-BNZKMaVx.js";import{C as k}from"./Checkbox-CLRg3utq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DpZhcIRJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C9_3iaV1.js";import"./useFocusRing-BrYzm1WE.js";import"./index-CLd4ePYI.js";import"./index-diFmr_MR.js";import"./TextFieldBase-dQfrobou.js";import"./TextField-CogfLdnJ.js";import"./FieldError-ChV4RtkC.js";import"./Text-BY7Usvs3.js";import"./Text-Bhd6_kYx.js";import"./ListKeyboardDelegate-BgHri0Rv.js";import"./SelectionManager-DsgAVjY_.js";import"./useEvent-NO9hY4Fn.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-MRhTprq9.js";import"./useDescription-B1Mjxcra.js";import"./useControlledState-D6sP099n.js";import"./Group-BKo0Ddim.js";import"./Input-DFXmDDQm.js";import"./Hidden-OHKoEzO0.js";import"./Button-DjXyYGpa.js";import"./useLabels-Ci2CHO-E.js";import"./useButton-XQafiRGF.js";import"./useTextField-CCMYJd55.js";import"./useField-CV1GfsN5.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-BH09S03E.js";import"./Dialog-DfOBadNr.js";import"./RSPContexts-B6siFojX.js";import"./OverlayArrow-BUF6pPS1.js";import"./useResizeObserver-rWRS_qVq.js";import"./Collection-VA8nDJDW.js";import"./index-43OxD3gC.js";import"./Separator-deA4lD6B.js";import"./PressResponder-BtF6tmeh.js";import"./useLocalizedStringFormatter-rS1APecD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C9FtuDmw.js";import"./Dialog-BvLZssx7.js";import"./useLocalizedStringFormatter-R8ADkQmS.js";import"./x-Bi-DXXAO.js";import"./createLucideIcon-D-Bnqv-j.js";import"./Heading-DQTCXvJE.js";import"./info-B-uwYUfi.js";import"./Tag-ByQ-4hro.js";import"./ListBox-D5qaGheM.js";import"./DragAndDrop-B2ex9aLV.js";import"./inertValue-q4YHieAj.js";import"./useListState-HLaslcLS.js";import"./useHighlightSelectionDescription-Odx92jua.js";import"./useUpdateEffect-BY7Szxn_.js";import"./useHasTabbableChild-DpVKbzpv.js";import"./check-CNZW7PTi.js";import"./ListBoxSection-B1dT2F-f.js";import"./Virtualizer-BsQUw9HN.js";import"./useObserveElement-DgioSc1p.js";import"./chevron-down-d3qNGTN0.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-AV_6P_IB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
