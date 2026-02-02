import{j as e}from"./iframe-Da36InMg.js";import{$ as c}from"./Form-CPfmFs5J.js";import{G as d}from"./Grid-Be4nFybP.js";import{G as i}from"./GridItem-CSk_nn4D.js";import{a as x,R as u}from"./Radio-DHy50Kf6.js";import{C as I}from"./CheckboxGroup-BLeWB-ad.js";import{C as G}from"./Checkbox-C7HaoPnB.js";import{T as t}from"./TextField-IbxbwYWd.js";import{S as l}from"./Select-Bl1O4hqu.js";import{L as p}from"./ListBoxItem-DQxMP-yR.js";import{B as a}from"./Button-CXuDImk2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHXZEpsb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DJDlUrPu.js";import"./useFocusRing-PWqs4TW9.js";import"./index-CaZlPwUz.js";import"./index-Di1QGlpo.js";import"./clsx-Ciqy0D92.js";import"./Group-DXkxMY61.js";import"./FieldError-DdDYB_s_.js";import"./Text-BrXpqahc.js";import"./Text-UbtOGoYO.js";import"./Button-C9KA9u1r.js";import"./Hidden-CWBgmXhh.js";import"./useLabels-Bp-J3Y5-.js";import"./useButton-C2CUOyHb.js";import"./SelectionIndicator-DB25faN4.js";import"./useField-USVqeQGP.js";import"./VisuallyHidden-a6Yj5g4U.js";import"./useControlledState-CA4_YWUf.js";import"./Label-DOu-JEPP.js";import"./Dialog-BKe9Hfgr.js";import"./RSPContexts-BsaudI60.js";import"./OverlayArrow-xlLv6U70.js";import"./useResizeObserver-zSLuHZKb.js";import"./Collection-i8cKfObX.js";import"./index-BnwfX8pc.js";import"./Separator-D1z883Jc.js";import"./SelectionManager-Dbt8q9np.js";import"./useEvent-DIDPEC78.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BI7Uumxx.js";import"./ListKeyboardDelegate-RfE4x_5K.js";import"./PressResponder-mujXrtzJ.js";import"./useLocalizedStringFormatter-wrWdFXU1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwSGSDHA.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CjhM0Bjo.js";import"./createLucideIcon-CXcjDiHx.js";import"./useLocalizedStringFormatter-CLWMEVc4.js";import"./Heading-DyQRIaZu.js";import"./info-2BC-avJp.js";import"./Popover-qbNdFZ9z.js";import"./check-CZ1c_xBg.js";import"./useToggleState-CGgRQOSw.js";import"./TextFieldBase-BYGy_BeK.js";import"./TextField-DKhG9kfm.js";import"./Input-Dngsr9Yb.js";import"./useTextField-C41GIDAY.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DRmOQ41Q.js";import"./DragAndDrop-QaE5_H-G.js";import"./inertValue-C_WVqqYH.js";import"./useListState-jeiK6fgc.js";import"./Tag-BOXfc-Lt.js";import"./useHighlightSelectionDescription-CGqsNx8V.js";import"./useUpdateEffect-CljHakf9.js";import"./useHasTabbableChild-CGQi_KQs.js";import"./chevron-down-Cb50XGAM.js";import"./Virtualizer-B9megW9A.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
