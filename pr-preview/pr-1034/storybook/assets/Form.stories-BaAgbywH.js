import{j as e}from"./iframe-DgMSVBJj.js";import{$ as c}from"./Form-B7h5JGfO.js";import{G as d}from"./Grid-wJ0Ax794.js";import{G as i}from"./GridItem-B1FLZxEA.js";import{a as x,R as u}from"./Radio-DEesxdJG.js";import{C as I}from"./CheckboxGroup-RgblK68c.js";import{C as G}from"./Checkbox-CZClZBxi.js";import{T as t}from"./TextField-cT0_ZMNu.js";import{S as l}from"./Select-C9Ts3fST.js";import{L as p}from"./ListBoxItem-CekILHIL.js";import{B as a}from"./Button-Cx_rtnFw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUVZQFkZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-k09FZdMi.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./clsx-Ciqy0D92.js";import"./Group-CvZhlyDo.js";import"./FieldError-DhkdCeIN.js";import"./Text-C3v5M0X6.js";import"./Text-D4BWFKQS.js";import"./Button-D-J1jvHp.js";import"./Hidden-B0_wOBGj.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./SelectionIndicator-Bv7832s7.js";import"./useField-B4BmtOyh.js";import"./VisuallyHidden-MCla8tVA.js";import"./useControlledState-BKuwHYa2.js";import"./Label-CXDdM-31.js";import"./Dialog-Cn8fkIH5.js";import"./RSPContexts-GwS0uMKq.js";import"./OverlayArrow-CrCYMJYS.js";import"./useResizeObserver-BueDMYXk.js";import"./Collection-Dx95RUAw.js";import"./index-ByCdYvx5.js";import"./Separator-DNiFECer.js";import"./SelectionManager-D8ya2Y1V.js";import"./useEvent-CKIQixox.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C3jZSQWL.js";import"./ListKeyboardDelegate-Besye-xt.js";import"./PressResponder-CUUY1kpS.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Crea59K9.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-PtDtzKM-.js";import"./createLucideIcon-xbipfE59.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./Heading-Dn0wZytP.js";import"./info-BC3W2YHM.js";import"./Popover-CoFS7WWY.js";import"./check-Dyi7NhJJ.js";import"./useToggleState-DH3QGZJ6.js";import"./TextFieldBase-CmZbWbUJ.js";import"./TextField-BHL7lCl6.js";import"./Input-HY3QRdRM.js";import"./useTextField-JEfR7FTO.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CKCcpFq3.js";import"./DragAndDrop-D-qwsIil.js";import"./inertValue-Bj1IViAP.js";import"./useListState-DyKrjyqL.js";import"./Tag-CXcu1IxK.js";import"./useHighlightSelectionDescription-C9WWTr_-.js";import"./useUpdateEffect-DUIi_A7d.js";import"./useHasTabbableChild-DrwESLJ6.js";import"./chevron-down-CLxyHD8G.js";import"./Virtualizer-BWdXdT4j.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
