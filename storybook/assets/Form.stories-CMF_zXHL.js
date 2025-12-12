import{j as e}from"./iframe-DAdLp1QF.js";import{$ as c}from"./Form-CunIAvBc.js";import{G as d}from"./Grid-BLUTUMht.js";import{G as i}from"./GridItem-BUrtwE5T.js";import{T as t}from"./TextField-Gv9W1F1G.js";import{S as l}from"./Select-DO36S8D3.js";import{B as a}from"./Button-DQbQp0QJ.js";import{R as x,a as u}from"./Radio-dcgZNDiN.js";import{C as I}from"./CheckboxGroup-LXg2tPhL.js";import{C as G}from"./Checkbox-smWI1dws.js";import{L as p}from"./ListBoxItem-BBJEBLPp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ByUIGDWY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Csyf_1Q2.js";import"./useFocusRing-D53tZ_0K.js";import"./index-DoL8Y7w4.js";import"./index-QU8jILku.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DD2AfKAd.js";import"./TextField-D21XclzZ.js";import"./FieldError-FVxfyxcS.js";import"./Text-SxkkCqAs.js";import"./Text-CopR-Qh3.js";import"./RSPContexts-D2jy_A4X.js";import"./Group-DQXpyrMc.js";import"./Input-DZHYgmsM.js";import"./Hidden-B_XHwn2B.js";import"./Button-fvyThmWu.js";import"./useLabels-Ca5jvo4m.js";import"./useButton-D93eGxVU.js";import"./useTextField-CBtFWLA6.js";import"./useControlledState-Cjv7AWlH.js";import"./useField-I0_MMok3.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B_97ycLG.js";import"./Dialog-Do83UJSD.js";import"./OverlayArrow-DLensElf.js";import"./useResizeObserver-EV8RWbU7.js";import"./Collection-MgqcXUJ1.js";import"./index-9ORdlLf0.js";import"./Separator-j1BXl5YZ.js";import"./SelectionManager-Drlu2O8r.js";import"./useEvent-DlPeIjzj.js";import"./scrollIntoView-DYxQjL77.js";import"./SelectionIndicator-B-OFG3Yf.js";import"./useDescription-CybEfZFS.js";import"./ListKeyboardDelegate-Xd6EmlYN.js";import"./PressResponder-DCu-6Uju.js";import"./useLocalizedStringFormatter-CNpWk1vP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ijb0Zcwq.js";import"./VisuallyHidden-Ctoge_gF.js";import"./x-D7c1f2O5.js";import"./createLucideIcon-DWkxk0NR.js";import"./useLocalizedStringFormatter-BzYUMjPp.js";import"./Heading-CaYbTykr.js";import"./info-hzhf19VQ.js";import"./Popover-BWE5DCEV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kdJ2DQmw.js";import"./DragAndDrop-B3ofwWa1.js";import"./inertValue-E_jeyjv3.js";import"./useListState-Blg2CxiL.js";import"./Tag-BJBP0Cs_.js";import"./useHighlightSelectionDescription-3DYzUnnh.js";import"./useUpdateEffect-DUNV_TzU.js";import"./useHasTabbableChild-UYAZbMUE.js";import"./chevron-down-Dwi337LP.js";import"./Button.module-Co5e5YHp.js";import"./check-xa5wE6hA.js";import"./useToggleState-BUuO-Xt0.js";import"./Virtualizer-Zd5F9D1E.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
