import{j as n}from"./iframe-BjA4-LgN.js";import{$ as j}from"./Form-6JOQtaez.js";import{G}from"./Grid-BANJYRdG.js";import{G as e}from"./GridItem-BcrH6uIP.js";import{T as r}from"./TextField-DBcnuD7j.js";import{S as I}from"./Select-Df4zrcpP.js";import{B as a}from"./Button-DIVwwB38.js";import{R as g,a as b}from"./Radio-Bii32zcC.js";import{C as h}from"./CheckboxGroup-Bj2iPdLQ.js";import{C as k}from"./Checkbox-Bbsw8xdq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DVwvt1xR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DpUtvoG_.js";import"./useFocusRing-Xx82C-3Y.js";import"./index-DGF1XjJu.js";import"./index-CzvUBdfP.js";import"./TextFieldBase-BgojzKHa.js";import"./TextField-BVAr0mTx.js";import"./FieldError-CiIsMVi0.js";import"./Text-lqH5z4wC.js";import"./Text-DTXqYjNI.js";import"./ListKeyboardDelegate-Cik6ge9i.js";import"./SelectionManager-CnDyUM36.js";import"./useEvent-C4dXLemT.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DySbErsF.js";import"./useDescription-BeTimnm-.js";import"./useControlledState-Dj28PZJt.js";import"./Group-BKN81p70.js";import"./Input-CMy6JjHc.js";import"./Hidden-mf28hIhb.js";import"./Button-CHHWD6un.js";import"./useLabels-DQZLZeGh.js";import"./useButton-C-eNn8wq.js";import"./useTextField-EE_HSRjX.js";import"./useField-CUUjk53v.js";import"./TextField.module-DjUItNl5.js";import"./Label-BY1qXUxq.js";import"./Dialog-su-BQl7C.js";import"./RSPContexts-Cq3s7yxo.js";import"./OverlayArrow-DsIBaX5v.js";import"./useResizeObserver-D9lSmBmb.js";import"./Collection-By4_0nXI.js";import"./index-0ganwatI.js";import"./Separator-B91a9U1s.js";import"./PressResponder-CHv-amoD.js";import"./useLocalizedStringFormatter-qAcjNalD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DiMFSDpi.js";import"./Dialog-BTYnGmLE.js";import"./useLocalizedStringFormatter-Diffmmqw.js";import"./x-D1MpORG3.js";import"./createLucideIcon-DYC8HzWN.js";import"./Heading-BTdc9HSf.js";import"./info-BVzU9N9L.js";import"./Tag-D2JhJyiE.js";import"./ListBox-fCB7dvvz.js";import"./DragAndDrop-RrCXogsD.js";import"./inertValue-CXe5ffIq.js";import"./useListState-CwncNwK1.js";import"./useHighlightSelectionDescription-DqknG4Ul.js";import"./useUpdateEffect-DKr0BYue.js";import"./useHasTabbableChild-CXmMHHv_.js";import"./check-BTKmyJ4P.js";import"./ListBoxSection-BPRecPof.js";import"./Virtualizer-Crt-FlnE.js";import"./useObserveElement-Dotv0qVn.js";import"./chevron-down-DsruM04b.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D3dj4nWb.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
