import{j as n}from"./iframe-2zDgNc5O.js";import{$ as j}from"./Form-CM8CrBPx.js";import{G}from"./Grid-DXupVjhY.js";import{G as e}from"./GridItem-DVDyRwvq.js";import{T as r}from"./TextField-CiHXWdGe.js";import{S as I}from"./Select-DTzTpeIb.js";import{B as a}from"./Button-BQuGGE3J.js";import{R as g,a as b}from"./Radio-mZBnIzHF.js";import{C as h}from"./CheckboxGroup-BGW9ctlP.js";import{C as k}from"./Checkbox--_XggKil.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Brg8JT1h.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CkWmQT1y.js";import"./useFocusRing-tbIGw-tS.js";import"./index-BUO9eHy7.js";import"./index-CMnOunom.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D6dhTSUM.js";import"./TextField-DPu4Zt4M.js";import"./FieldError-tj1ORRdL.js";import"./Text-HTE1RznZ.js";import"./Text-1qnn4f18.js";import"./RSPContexts-D9A_QNPr.js";import"./Group-8lFt0PAc.js";import"./Input-CeSjyyiy.js";import"./Hidden-B4ZIWeLz.js";import"./Button-BOJVC4TZ.js";import"./useLabels-Dj5I4u3v.js";import"./useButton-BHr7V2cG.js";import"./useTextField-Ipt2xdUA.js";import"./useControlledState-DANjDR8T.js";import"./useField-D0E-0bwM.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BCjRis0a.js";import"./Dialog-C4KCiKSp.js";import"./OverlayArrow-CvMXdxC-.js";import"./useResizeObserver-DtTglQfj.js";import"./Collection-DQlW_jfG.js";import"./index-DRiwHPDo.js";import"./Separator-bP3RBdSj.js";import"./SelectionManager-B-Rwjn24.js";import"./useEvent-DaaeSGZz.js";import"./scrollIntoView-CaEI-bjA.js";import"./SelectionIndicator-BqkV0IJZ.js";import"./useDescription-Db_EZW_w.js";import"./ListKeyboardDelegate-BYKiNCh_.js";import"./PressResponder-BOnUp5hV.js";import"./useLocalizedStringFormatter-DQT4AcMY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DBMsePEp.js";import"./VisuallyHidden-BxNdOQXZ.js";import"./useLocalizedStringFormatter-CMY1bRgr.js";import"./x-Bu4Ey_NH.js";import"./createLucideIcon-BQc63Y_K.js";import"./Heading-Dr_Eq1TG.js";import"./info-DuQXl5zk.js";import"./Popover-BIhQ7nWU.js";import"./Tag-CrdYdZJb.js";import"./ListBox-DFfPmwT5.js";import"./DragAndDrop-jmkju8EA.js";import"./inertValue-CfkI0qYj.js";import"./useListState-uM_oK5zE.js";import"./useHighlightSelectionDescription-D5-WyiRm.js";import"./useUpdateEffect-DatZONII.js";import"./useHasTabbableChild-B8Ex8zTm.js";import"./check-DIVkbfC8.js";import"./ListBoxSection-CMe4Euh_.js";import"./Virtualizer-DBtwMAF4.js";import"./chevron-down-Bq4gsHkV.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BLA4cJFj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
