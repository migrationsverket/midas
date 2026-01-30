import{j as e}from"./iframe-nOsxirQX.js";import{$ as c}from"./Form-DMuDE9rp.js";import{G as d}from"./Grid-GQkXZGMg.js";import{G as i}from"./GridItem-BC9AWMV3.js";import{a as x,R as u}from"./Radio-CzCehhUm.js";import{C as I}from"./CheckboxGroup-DtZbfUrr.js";import{C as G}from"./Checkbox-DXBW3FlM.js";import{T as t}from"./TextField-YkaYLGFV.js";import{S as l}from"./Select-BwRq7RNx.js";import{L as p}from"./ListBoxItem-B5K6HzjS.js";import{B as a}from"./Button-C_6tr8VE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bx1o-H88.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BrKAO3SO.js";import"./useFocusRing-D89DlAJn.js";import"./index-BBtn04JY.js";import"./index-4Tg7UEMT.js";import"./clsx-Ciqy0D92.js";import"./Group-DEbvtBAL.js";import"./FieldError-BRIeksHU.js";import"./Text-B8fVM-qM.js";import"./Text-66nZ78iJ.js";import"./Button-DcANhavY.js";import"./Hidden-BQXizKKD.js";import"./useLabels-quzXmLXQ.js";import"./useButton-Bh9NqEET.js";import"./SelectionIndicator-CQUuNVdz.js";import"./useField-BV3Fx_ol.js";import"./VisuallyHidden-D_ts-6oX.js";import"./useControlledState-DDwIrHc5.js";import"./Label-DfL6m-wx.js";import"./Dialog-BDaCOdOP.js";import"./RSPContexts-qetO-Bd7.js";import"./OverlayArrow-DO2di5Gw.js";import"./useResizeObserver-CbmTSZDe.js";import"./Collection-NzMDAGr4.js";import"./index-zXchqore.js";import"./Separator-ZB0JX3cV.js";import"./SelectionManager-CyXtJ1CD.js";import"./useEvent-BSYUz00V.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-JIsLYad4.js";import"./ListKeyboardDelegate-ByeLr9bU.js";import"./PressResponder-J1QjmTAC.js";import"./useLocalizedStringFormatter-CEAmhm35.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7vbmbM2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Co742d-j.js";import"./createLucideIcon-BM5xacqz.js";import"./useLocalizedStringFormatter-BrifjVpT.js";import"./Heading-9EKTJ505.js";import"./info-K5PMbTGZ.js";import"./Popover-B25u0Cb5.js";import"./check-D2B4Z9Fa.js";import"./useToggleState-DHGAkj8F.js";import"./TextFieldBase-C9X7zb9b.js";import"./TextField-Oivq7y0A.js";import"./Input-CexUVZeg.js";import"./useTextField-BtRrdgvy.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D7K510Rh.js";import"./DragAndDrop-D5M0j52P.js";import"./inertValue-BtCEyQ8w.js";import"./useListState-BaccqECO.js";import"./Tag-fnKOaKbV.js";import"./useHighlightSelectionDescription-CXj2fTLj.js";import"./useUpdateEffect-DrecfZNp.js";import"./useHasTabbableChild-hh1iqLeB.js";import"./chevron-down-BKqpb3Gs.js";import"./Virtualizer-CxVB47Wn.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
