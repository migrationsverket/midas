import{j as e}from"./iframe-Bf2O8mTA.js";import{$ as c}from"./Form-DYo8KYF6.js";import{G as d}from"./Grid-DikZXh7h.js";import{G as i}from"./GridItem-BRcQdUYK.js";import{a as x,R as u}from"./Radio-Cxqu8vWD.js";import{C as I}from"./CheckboxGroup-I0kHu8Cp.js";import{C as G}from"./Checkbox-CGyEYq6N.js";import{T as t}from"./TextField-zH_YKZYv.js";import{S as l}from"./Select-CiMoB9Eu.js";import{L as p}from"./ListBoxItem-DXv7oNjt.js";import{B as a}from"./Button-DqEB6TwE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvWeM8bD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BYxqhBck.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./clsx-Ciqy0D92.js";import"./Group-Cj9Vvhx9.js";import"./FieldError-DmoCXSDp.js";import"./Text-Br20EZ_Y.js";import"./Text-C9gRZFsm.js";import"./Button-rJBUL80Z.js";import"./Hidden-Bayn64y7.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./SelectionIndicator-BuSwNt_S.js";import"./useField-BNnNMNgv.js";import"./VisuallyHidden-BdseXYtF.js";import"./useControlledState-B4kZCJVJ.js";import"./Label-CD1d4Xmd.js";import"./Dialog-BY8A039T.js";import"./RSPContexts-hwAw1TwI.js";import"./OverlayArrow-CtPodeWM.js";import"./useResizeObserver-i-41ifPW.js";import"./Collection-CvTBTnk3.js";import"./index-wKm3OkVX.js";import"./Separator-BrNcT25L.js";import"./SelectionManager-BtZRuM5E.js";import"./useEvent-BtnAi-yB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dq7jvEgt.js";import"./ListKeyboardDelegate-BxLtXsZO.js";import"./PressResponder-CGCF4LOu.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ou16LPbu.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-rPy8VafX.js";import"./createLucideIcon-DkEcA7M8.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./Heading-Dv8-19Cj.js";import"./info-D1lcR4Lw.js";import"./Popover-CS3oSh0J.js";import"./check-DXEbxG8U.js";import"./useToggleState-BFLGlTr7.js";import"./TextFieldBase-BN1pQzKC.js";import"./TextField-B6K9WGDi.js";import"./Input-BzA5AFfw.js";import"./useTextField-CBUs1YNw.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BnL3LdAD.js";import"./DragAndDrop-UgtpwwIP.js";import"./inertValue-r2BaUb5C.js";import"./useListState-CKZdN5UU.js";import"./Tag-CL1jg23J.js";import"./useHighlightSelectionDescription-CdeIQPaD.js";import"./useUpdateEffect-B7MSZtHN.js";import"./useHasTabbableChild-BQd4FoMP.js";import"./chevron-down-DZsz-mi-.js";import"./Virtualizer-CP-k-NRF.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
