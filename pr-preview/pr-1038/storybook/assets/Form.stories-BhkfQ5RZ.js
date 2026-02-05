import{j as e}from"./iframe-Gk5MEbtf.js";import{$ as c}from"./Form-AuxABJFX.js";import{G as d}from"./Grid-DzN91iwd.js";import{G as i}from"./GridItem-DkMhNgZp.js";import{a as x,R as u}from"./Radio-D3qZnkBa.js";import{C as I}from"./CheckboxGroup-DX3qRXci.js";import{C as G}from"./Checkbox-9F1vqAjb.js";import{T as t}from"./TextField--LQxQPH2.js";import{S as l}from"./Select-CLV8uijn.js";import{L as p}from"./ListBoxItem-DudampZp.js";import{B as a}from"./Button-B5zSSp1x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-FYzLBBKM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHhvC1R-.js";import"./useFocusRing-WCMdeDPk.js";import"./index-BR8-lUkO.js";import"./index-D_XTGtZn.js";import"./clsx-Ciqy0D92.js";import"./Group-zEW9EYC3.js";import"./FieldError-Baa_Kzdb.js";import"./Text-IP7yd6GC.js";import"./Text-B-qEqFBc.js";import"./Button-BwdIuzcz.js";import"./Hidden-DGa8KKgC.js";import"./useLabels-C555CKHB.js";import"./useButton-Df05FaMj.js";import"./SelectionIndicator-DE0dXJyi.js";import"./useField-Dxt7Dh66.js";import"./VisuallyHidden-BZBSJD1a.js";import"./useControlledState-D6DRt1-U.js";import"./Label-Clq3Brpr.js";import"./Dialog-DccWkxj-.js";import"./RSPContexts-D7f3u4-c.js";import"./OverlayArrow-ChTybOlo.js";import"./useResizeObserver-B5v0NhcV.js";import"./Collection-CTg3a-LF.js";import"./index-C5D58yZq.js";import"./Separator-Buy2ykEb.js";import"./SelectionManager-D4T18dtQ.js";import"./useEvent-kxVIpsfo.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C6ibjGIG.js";import"./ListKeyboardDelegate-sTv_qp8F.js";import"./PressResponder-DBCFch6O.js";import"./useLocalizedStringFormatter-CJFI85ze.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DK3Qf2Z4.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DLbbIzYm.js";import"./createLucideIcon-BsHpl2bp.js";import"./useLocalizedStringFormatter-BIW-Yh1F.js";import"./Heading-4zMnqe9X.js";import"./info-CdwyBqaO.js";import"./Popover-DDGcUx6m.js";import"./check-US-AfPLA.js";import"./useToggleState-c4WOe3kf.js";import"./TextFieldBase-CxgeuHWH.js";import"./TextField-2WD5lV8m.js";import"./Input-Bh6iF670.js";import"./useTextField-DBqyAHfj.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DyQvk_H2.js";import"./DragAndDrop-6c1x62xx.js";import"./inertValue-Dv7Foors.js";import"./useListState-B0ay8j6T.js";import"./Tag-COONDhTa.js";import"./useHighlightSelectionDescription-COIQJ644.js";import"./useUpdateEffect-D96zWjbm.js";import"./useHasTabbableChild-BoEn7fuP.js";import"./chevron-down-XLwQaloQ.js";import"./Virtualizer-rjJwFN84.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
