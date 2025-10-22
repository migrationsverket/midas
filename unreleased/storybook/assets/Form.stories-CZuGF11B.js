import{j as n}from"./iframe-CpIrqyfQ.js";import{$ as j}from"./Form-D-kB2E5z.js";import{G}from"./Grid-BSPPyOk7.js";import{G as e}from"./GridItem-B2gkFI2A.js";import{T as r}from"./TextField-DhvCMk5e.js";import{S as I}from"./Select-DRTYXMY4.js";import{B as a}from"./Button-DLxZ5Dos.js";import{R as g,a as b}from"./Radio-DMkw4KKK.js";import{C as h}from"./CheckboxGroup-BojX2bk3.js";import{C as k}from"./Checkbox-CIUckeV3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CynKb8kC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-ByemjeA4.js";import"./useFocusRing-pgu8-f8I.js";import"./index-Y_R-C8LG.js";import"./index-DJpJzUjc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BlAf2fBX.js";import"./TextField-D8QoCuxc.js";import"./FieldError-DLRlPSBQ.js";import"./Text-DzxGqire.js";import"./Text-gp_WHUrS.js";import"./RSPContexts-DXTG3gDc.js";import"./Group-DAl3pnwv.js";import"./Input-D3_nivPs.js";import"./Hidden-BrC7U0Er.js";import"./Button-EopmSv9f.js";import"./useLabels-BaOgrre2.js";import"./useButton-t5R6kj5U.js";import"./useTextField-D6MHi7M0.js";import"./useControlledState-BBsvM9kd.js";import"./useField-iVPYIdbg.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-RnGfUB0k.js";import"./Dialog-Crp9pgXm.js";import"./OverlayArrow-DbTcvLgw.js";import"./useResizeObserver-DaUl5v7E.js";import"./Collection-BhtaIeGW.js";import"./index-D8YkModO.js";import"./Separator-BIDPX2cs.js";import"./SelectionManager-DB_94EiV.js";import"./useEvent-DVRAM3tp.js";import"./scrollIntoView-DBMDSy5d.js";import"./SelectionIndicator-CGFWM2ho.js";import"./useDescription-dwaNU5x1.js";import"./ListKeyboardDelegate-BWtdwWAL.js";import"./PressResponder-BzwOCixj.js";import"./useLocalizedStringFormatter-5pmANXVH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Dq4fhNtW.js";import"./VisuallyHidden-BFSgGMUK.js";import"./useLocalizedStringFormatter-272YKOeu.js";import"./x-pszGEmFp.js";import"./createLucideIcon-trxrrXoi.js";import"./Heading-dYFJ-FGL.js";import"./info-D3vaZ4zd.js";import"./Popover-d0whvEwv.js";import"./Tag-DCKxDvD7.js";import"./ListBox-NzwogLlC.js";import"./DragAndDrop-BRskZKWf.js";import"./inertValue-dq2TUNv-.js";import"./useListState-CJ4xqPdm.js";import"./useHighlightSelectionDescription-B7uYbxMN.js";import"./useUpdateEffect-DZBWjP1i.js";import"./useHasTabbableChild-BOsy1MSq.js";import"./check-DdL8V4_h.js";import"./ListBoxSection-CacKlkRi.js";import"./Virtualizer-CCWpetJN.js";import"./chevron-down-BLWVxHFQ.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-C0m2NgWK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
