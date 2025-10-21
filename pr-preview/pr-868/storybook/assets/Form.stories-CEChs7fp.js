import{j as n}from"./iframe-DDVc1lps.js";import{$ as j}from"./Form-Djol5DPZ.js";import{G}from"./Grid-D2X6Yg0m.js";import{G as e}from"./GridItem-DftSYA3u.js";import{T as r}from"./TextField-CH_X5adS.js";import{S as I}from"./Select-CtIAZSNM.js";import{B as a}from"./Button-DfzgYSEe.js";import{R as g,a as b}from"./Radio-DtnyL-gY.js";import{C as h}from"./CheckboxGroup-9abN8_Z2.js";import{C as k}from"./Checkbox-2-cuJnz6.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BFVZzpWe.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D2IzMFqK.js";import"./useFocusRing-D2GBwBYm.js";import"./index-e6_bz3yD.js";import"./index-D9XsSKwk.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-OgX6iGr1.js";import"./TextField-BN7TYKfO.js";import"./FieldError-CaOoTb0X.js";import"./Text-DiEK2mif.js";import"./Text-10z_MA_g.js";import"./RSPContexts-DOKqRYnu.js";import"./Group-ervLrKxQ.js";import"./Input-C2T-gHSH.js";import"./Hidden-BoDZID_T.js";import"./Button-DXpBck9b.js";import"./useLabels-D8Kf1IJb.js";import"./useButton-CtdesFtl.js";import"./useTextField-B3GJHHbI.js";import"./useControlledState-Cz1sPGeO.js";import"./useField-CFJ0n_Sl.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-C8faKMTe.js";import"./Dialog-B2ZPgqXC.js";import"./OverlayArrow-C16mnLPu.js";import"./useResizeObserver-DEc6TmwT.js";import"./Collection-otex0QT1.js";import"./index-CPs1d9q2.js";import"./Separator-DXCCscve.js";import"./SelectionManager-D5ECSSn-.js";import"./useEvent-CX3K645i.js";import"./scrollIntoView-DwDSZaLt.js";import"./SelectionIndicator-DT5xFAMR.js";import"./useDescription-B7XbiMhy.js";import"./ListKeyboardDelegate-DL_vdYXj.js";import"./PressResponder-D0sJy760.js";import"./useLocalizedStringFormatter-xNNAS41n.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-29TFfIJy.js";import"./VisuallyHidden-DC4Fe3Ag.js";import"./useLocalizedStringFormatter-BbuLr_px.js";import"./x-DsSyg8Es.js";import"./createLucideIcon-DnGy652q.js";import"./Heading-brbTMOva.js";import"./info-DGDw3y0A.js";import"./Popover-CcVOwU1P.js";import"./Tag-qNZ4QsL1.js";import"./ListBox-B0Ck3WUB.js";import"./DragAndDrop-zTjsLFey.js";import"./inertValue-CTPXsPao.js";import"./useListState-CD6PHys1.js";import"./useHighlightSelectionDescription-C8XVt-1G.js";import"./useUpdateEffect-srUGGt5G.js";import"./useHasTabbableChild-DT_8ILIQ.js";import"./check-WashWzcR.js";import"./ListBoxSection-D9YJqOoB.js";import"./Virtualizer-BsP5v5Zm.js";import"./chevron-down-DMguc8O8.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BvwVdm9p.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
