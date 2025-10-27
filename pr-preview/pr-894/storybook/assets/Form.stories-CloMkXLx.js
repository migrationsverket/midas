import{j as n}from"./iframe-BwH-Lx90.js";import{$ as j}from"./Form-BJ-_c7ol.js";import{G}from"./Grid-lJAMcfUH.js";import{G as e}from"./GridItem-BDLe-SKx.js";import{T as r}from"./TextField-C7XAXHvM.js";import{S as I}from"./Select-DGilCHX4.js";import{B as a}from"./Button-BizqGLk0.js";import{R as g,a as b}from"./Radio-CpWWNbRb.js";import{C as h}from"./CheckboxGroup-Bn6xr9bs.js";import{C as k}from"./Checkbox-DgU6pGTu.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BSoY4MwA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-yX71AOCr.js";import"./useFocusRing-B_Nyktnx.js";import"./index-I6bFFxf8.js";import"./index-dwT5Nujc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BEGlA3UC.js";import"./TextField-BcSUZ3O7.js";import"./FieldError-BpTInOBt.js";import"./Text-Dg0dTwoh.js";import"./Text-C06sgJN_.js";import"./RSPContexts-CQ6CkVKH.js";import"./Group-CqT2_BYN.js";import"./Input-B1QaP5rF.js";import"./Hidden-D3dbG7PD.js";import"./Button-CEsLMfpT.js";import"./useLabels-vZhVJ9vJ.js";import"./useButton-PZzRaxvW.js";import"./useTextField-CHL9tU_o.js";import"./useControlledState-mOHJX8bF.js";import"./useField-CEBoLfFL.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-puHXlVAG.js";import"./Dialog-iM49GH_f.js";import"./OverlayArrow-BQMJSHgZ.js";import"./useResizeObserver-Ci08lxZj.js";import"./Collection-DNJ61jis.js";import"./index-wZV9kEs1.js";import"./Separator-MVG8Gxkd.js";import"./SelectionManager-Dr9N7oam.js";import"./useEvent-DI4G-SrA.js";import"./scrollIntoView-CBoDrKk_.js";import"./SelectionIndicator-CMPtY3RK.js";import"./useDescription-JivsosT5.js";import"./ListKeyboardDelegate-qbj0de_H.js";import"./PressResponder-Ck1wvC2t.js";import"./useLocalizedStringFormatter-DZht3deX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Cb1Z8tsE.js";import"./VisuallyHidden-1M8vW8LA.js";import"./useLocalizedStringFormatter-BL-GKUaG.js";import"./x-CVb0omP3.js";import"./createLucideIcon-DAPiy3s_.js";import"./Heading-BBCtVWFE.js";import"./info-BLS55gOD.js";import"./Popover-Ds7hCDEe.js";import"./Tag-B0aWX9m7.js";import"./ListBox-BABhovG3.js";import"./DragAndDrop-B29saB1Y.js";import"./inertValue-BBazVmYu.js";import"./useListState-C7Ucs9Jh.js";import"./useHighlightSelectionDescription-DwFkVA0j.js";import"./useUpdateEffect-BKYepvD4.js";import"./useHasTabbableChild-BSZCdGp3.js";import"./check-DHUfcvKO.js";import"./ListBoxSection-RkInXaFw.js";import"./Virtualizer-C4LZrUPU.js";import"./chevron-down-DOPcUUFq.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CrkObA92.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
