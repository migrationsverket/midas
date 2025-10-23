import{j as n}from"./iframe-DCgk2n3e.js";import{$ as j}from"./Form-Bt06DfUk.js";import{G}from"./Grid-BJFX3Oj-.js";import{G as e}from"./GridItem-YPU2kJwi.js";import{T as r}from"./TextField-BwWJePu-.js";import{S as I}from"./Select-CZRtWqf-.js";import{B as a}from"./Button-KDoiKicv.js";import{R as g,a as b}from"./Radio-DO8R9Z-h.js";import{C as h}from"./CheckboxGroup-C8uOSyL7.js";import{C as k}from"./Checkbox-DSv6XtVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BgepWSfX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CaSbfsg9.js";import"./useFocusRing-JcNxYSjR.js";import"./index-BelVOWl7.js";import"./index-DdMs7G1n.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-By09vYj_.js";import"./TextField-DC7YKzXd.js";import"./FieldError-Bk7DQj6-.js";import"./Text-CEpcvsGp.js";import"./Text-Cz6N_S-o.js";import"./RSPContexts-Bv0KnhJx.js";import"./Group-BFZ9LkbE.js";import"./Input-twtYNGU2.js";import"./Hidden-CLsC-9zt.js";import"./Button-Igo_8sgR.js";import"./useLabels-DpEvKIsW.js";import"./useButton-GAU2gu28.js";import"./useTextField-L4zlqtaE.js";import"./useControlledState-vTZXYnB5.js";import"./useField-DdrS9c8x.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CfkbvLD0.js";import"./Dialog-DdVw8F5r.js";import"./OverlayArrow-D-RhTLQ3.js";import"./useResizeObserver-BbGz1PlL.js";import"./Collection-4dmwBrCa.js";import"./index-B8YjlRe1.js";import"./Separator-B-duRIt_.js";import"./SelectionManager-Dkr-Ykny.js";import"./useEvent-BNjKvAU5.js";import"./scrollIntoView-AXaqx5N5.js";import"./SelectionIndicator-Bz6Z35EW.js";import"./useDescription-DtPUQbdF.js";import"./ListKeyboardDelegate-B3G15ezs.js";import"./PressResponder-BUjR41qd.js";import"./useLocalizedStringFormatter-DJAbfeft.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CSVt2OFZ.js";import"./VisuallyHidden-DmxPaX-D.js";import"./useLocalizedStringFormatter-DGcN9jU8.js";import"./x-BvMc6zuO.js";import"./createLucideIcon-BE-WrARe.js";import"./Heading-BPchvG56.js";import"./info-D9pKhE03.js";import"./Popover-CRqPBv9g.js";import"./Tag-D53C0XHl.js";import"./ListBox-C2h6P_iP.js";import"./DragAndDrop-kxtAv2qZ.js";import"./inertValue-BYURCGE0.js";import"./useListState-BrXHyb38.js";import"./useHighlightSelectionDescription-DNGVjKQ1.js";import"./useUpdateEffect-BccQQHJ3.js";import"./useHasTabbableChild-COozSwF4.js";import"./check-CFGv9MTS.js";import"./ListBoxSection-BRkerQRm.js";import"./Virtualizer-BeM0hLn-.js";import"./chevron-down-ClwzWIyC.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-NodpS9Sj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
