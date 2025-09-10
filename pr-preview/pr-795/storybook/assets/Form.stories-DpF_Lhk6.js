import{j as n}from"./iframe-DO2aB_Ev.js";import{$ as j}from"./Form-RUr0FNtJ.js";import{G}from"./Grid-VCleYxLN.js";import{G as e}from"./GridItem-dbHdq5xo.js";import{T as r}from"./TextField-C1CBsGu2.js";import{S as I}from"./Select-B82Dm2Xy.js";import{B as a}from"./Button-D72hER9_.js";import{R as g,a as b}from"./Radio-BAyCt72w.js";import{C as h}from"./CheckboxGroup-CuVrExIH.js";import{C as k}from"./Checkbox-DHrFxv9U.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-tm6UYKsN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-COq5f_-Z.js";import"./useFocusRing-ij0kK0kq.js";import"./index-BbNHrjQ-.js";import"./index-ISt4efLA.js";import"./TextFieldBase-Bv0qwM_N.js";import"./TextField-DATuFJeO.js";import"./FieldError-Dpr9tckj.js";import"./Text-BdKbrpxa.js";import"./Text-DekXceQJ.js";import"./ListKeyboardDelegate-qCX17_CC.js";import"./SelectionManager-D5jZIdUU.js";import"./useEvent-DNdhrhy2.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DjKNdWZd.js";import"./useDescription-Bf6nHg2q.js";import"./useControlledState-B9C_wi7f.js";import"./Group-NIUWKpSN.js";import"./Input-DniwykFY.js";import"./Hidden-9Wmrs8od.js";import"./Button-_lfJPMMG.js";import"./useLabels-B1-E1lMB.js";import"./useButton-D-JbrB0T.js";import"./useTextField-iYSwM5Y9.js";import"./useField-B7jKEbJw.js";import"./TextField.module-8oYDuXgF.js";import"./Label-WDw8SpZe.js";import"./Dialog-AAEPdbVq.js";import"./RSPContexts-DyEOqTiE.js";import"./OverlayArrow-Ba351YFb.js";import"./useResizeObserver--xywFGha.js";import"./Collection-Ch_vjoKU.js";import"./index-DmCp18EC.js";import"./Separator-Z-KXiS3h.js";import"./PressResponder-Lx_ZfCeR.js";import"./useLocalizedStringFormatter-CG12RzR7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DXD2WZdJ.js";import"./Dialog-Cce61edg.js";import"./useLocalizedStringFormatter-J_3ThWkE.js";import"./x-dBZ-AO0x.js";import"./createLucideIcon-DCV2EI7I.js";import"./Heading-BAiI5jIV.js";import"./info-ZxZXhZbE.js";import"./Tag-BFFPrXQs.js";import"./ListBox-BmTn0OMg.js";import"./DragAndDrop-C9KuubC4.js";import"./inertValue-w3CWhWzg.js";import"./useListState-Zb-zs4p1.js";import"./useHighlightSelectionDescription-BQHdQ1Ui.js";import"./useUpdateEffect-mBBK2kAB.js";import"./useHasTabbableChild-hp0l2i3W.js";import"./check-CTREyTgc.js";import"./ListBoxSection-ClXPyql5.js";import"./Virtualizer-B5IIuyYj.js";import"./useObserveElement-BdUlqOZR.js";import"./chevron-down-CVZhLHpQ.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-DuXMDzfG.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
