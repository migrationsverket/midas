import{j as e}from"./iframe-BGjWmNYx.js";import{$ as c}from"./Form-DxBtc45O.js";import{G as d}from"./Grid-DkMnZAYO.js";import{G as i}from"./GridItem-CduAQlXL.js";import{a as x,R as u}from"./Radio-Yo7-vfeu.js";import{C as I}from"./CheckboxGroup-C0ubeHU6.js";import{C as G}from"./Checkbox-DaFQCbnt.js";import{T as t}from"./TextField-C1qo0smt.js";import{S as l}from"./Select-DioMwYGD.js";import{L as p}from"./ListBoxItem-DfZGd8uh.js";import{B as a}from"./Button-Dyr0yQHX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D7zTzvCU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CXGeViRH.js";import"./useFocusRing-Cv1kbpvb.js";import"./index-CY1Z3dQf.js";import"./index-D-vxhsZL.js";import"./clsx-Ciqy0D92.js";import"./Group-KkU9w4Lf.js";import"./FieldError-Wp4mauGJ.js";import"./Text-tIbPkLw7.js";import"./Text-B9EMTagt.js";import"./Button-XSu45boX.js";import"./Hidden-lp8KiHTo.js";import"./useLabels-Cv4iHN_P.js";import"./useButton-CFFtuGbm.js";import"./SelectionIndicator-Dbu_ggjF.js";import"./useField-SHucniBA.js";import"./VisuallyHidden-ClgLzi2l.js";import"./useControlledState-CvsrIW6T.js";import"./Label-Dx3FsG3d.js";import"./Dialog-6GVh3Jeb.js";import"./RSPContexts-D1Qe90-y.js";import"./OverlayArrow-C2Zs6ooA.js";import"./useResizeObserver-BNERkhke.js";import"./Collection-BuFB94CH.js";import"./index-BdIeoIee.js";import"./Separator-BHxadz7W.js";import"./SelectionManager-B25YHJY8.js";import"./useEvent-uGEaKInB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Djzcv64r.js";import"./ListKeyboardDelegate-B0EJnu-g.js";import"./PressResponder-DJaNeCdk.js";import"./useLocalizedStringFormatter-ByLY54jA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zIN36Wbs.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cbv80ht6.js";import"./createLucideIcon-Df5FTM0K.js";import"./useLocalizedStringFormatter-B-DKJptC.js";import"./Heading-Bf5zVwtP.js";import"./info-CPtkNmSm.js";import"./Popover-CgoIhE9r.js";import"./check-BWK8eD1i.js";import"./useToggleState-I3Y0jyjE.js";import"./TextFieldBase-ydKWK4h5.js";import"./Input-C0tej3s6.js";import"./useTextField-CE3BdgCR.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BgaMarno.js";import"./DragAndDrop-DGXlr-Qx.js";import"./inertValue-CsngWlf1.js";import"./useListState-DsRsurYM.js";import"./TagGroup-BybbKWN3.js";import"./useHighlightSelectionDescription-Dmv_ril_.js";import"./useUpdateEffect-Buzm9FI6.js";import"./useHasTabbableChild-D4e_cLwY.js";import"./chevron-down-DNuC9SsL.js";import"./Virtualizer-D8Yw0_tP.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
