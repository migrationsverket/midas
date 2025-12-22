import{j as e}from"./iframe-D3VtUWSl.js";import{$ as c}from"./Form-DyJflH8n.js";import{G as d}from"./Grid-YxhbqnjC.js";import{G as i}from"./GridItem-Bo0AnGQR.js";import{T as t}from"./TextField-Cx53zuKl.js";import{S as l}from"./Select-CQZuCTot.js";import{B as a}from"./Button-B6kHoh3j.js";import{R as x,a as u}from"./Radio-CBnUctsd.js";import{C as I}from"./CheckboxGroup-CJJ1_PtV.js";import{C as G}from"./Checkbox-BYSHLvGa.js";import{L as p}from"./ListBoxItem-BK1aw1QM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJW5kjsb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-QpiZFn6j.js";import"./useFocusRing-BNShuMky.js";import"./index-C6GLa6dJ.js";import"./index-Do45vOIK.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ByklExz1.js";import"./TextField-XB0q7ndR.js";import"./FieldError-Bm_vztuN.js";import"./Text-MlqW2q7o.js";import"./Text-NG_CJW3Y.js";import"./RSPContexts-DQTwS8CB.js";import"./Group-B7pMqh6c.js";import"./Input-Dmh1D8Cl.js";import"./Hidden-Dl7lCnqG.js";import"./Button-DGLiOuZ9.js";import"./useLabels-G0Yi_Cff.js";import"./useButton-BTM0ezGo.js";import"./useTextField-Dq-qzSWo.js";import"./useControlledState-D3RFosaK.js";import"./useField-nJGSZbaY.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CfiVdK1M.js";import"./Dialog-CS5pc5ud.js";import"./OverlayArrow-C5zL6ByH.js";import"./useResizeObserver-tEwY6QSL.js";import"./Collection-COoVVhJv.js";import"./index-BwqplYDC.js";import"./Separator-CQQXO2g-.js";import"./SelectionManager-Ckna7SeO.js";import"./useEvent-B0ijDIr5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1IEURPL.js";import"./useDescription-BN2PP9Tw.js";import"./ListKeyboardDelegate-BY-Z6ntK.js";import"./PressResponder-uoLN0SGq.js";import"./useLocalizedStringFormatter-DFLRg_X9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DIjoyXOv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CH7WgZ8s.js";import"./x-Dn9KaCdF.js";import"./createLucideIcon-7E-0s_aZ.js";import"./useLocalizedStringFormatter-CwDdLei2.js";import"./Heading-BDorIF3l.js";import"./info-CYNgDuCN.js";import"./Popover-B4qPI7XO.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ZCttZX4M.js";import"./DragAndDrop-qi16nm9m.js";import"./inertValue-DO_g5mI1.js";import"./useListState-CD2C4l9l.js";import"./Tag-Dp9Cng8g.js";import"./useHighlightSelectionDescription-DE1e7O63.js";import"./useUpdateEffect-DlrPEvBk.js";import"./useHasTabbableChild-CQSS41Tl.js";import"./chevron-down-Dt2T9JPk.js";import"./Button.module-Co5e5YHp.js";import"./check-DcYUsSr_.js";import"./useToggleState-vYTyGAyf.js";import"./Virtualizer-e09D3WWv.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
