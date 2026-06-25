import{j as e}from"./iframe-zmdm5LWO.js";import{c}from"./Form-B9squnXu.js";import{G as d}from"./Grid-DBOUuABt.js";import{G as i}from"./GridItem-BOrO2WYn.js";import{a as x,R as u}from"./Radio-DZPw-4Z6.js";import{C as I}from"./CheckboxGroup-C5AJ-h3N.js";import{C as G}from"./Checkbox-lU6_6t15.js";import{T as t}from"./TextField-BZhr8UwO.js";import{S as l}from"./Select-rwxAdChx.js";import{L as p}from"./ListBoxItem-VUY4Sr2Y.js";import{B as a}from"./Button-BYmNnQBF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-ChdwpxNy.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./clsx-Ciqy0D92.js";import"./Group-BfrZXSfh.js";import"./FieldError-CnGNBTtl.js";import"./Text-C_A67KfE.js";import"./Text-BlbFrX8Z.js";import"./Button-CJHqtIe5.js";import"./Hidden-Da0JYuUZ.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./SelectionIndicator-32SJlHNX.js";import"./useField-TGoSKSzA.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./useControlledState-CPsjL82m.js";import"./Label-DzCqChbE.js";import"./Dialog-DBdMj1h1.js";import"./RSPContexts-CkA1USMd.js";import"./OverlayArrow-ZJg9Y93d.js";import"./useResizeObserver-M4b8JNbB.js";import"./Collection-B_xTn3lN.js";import"./index-D_c3Fzu0.js";import"./Separator-CQQaiTiT.js";import"./SelectionManager-wVErokbN.js";import"./useEvent-xez8_YkI.js";import"./scrollIntoView-QLDgtXAW.js";import"./useDescription-rHa26S1A.js";import"./ListKeyboardDelegate-CRUYtTHH.js";import"./PressResponder-DQgjA9_y.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTUHhIU3.js";import"./getScrollParent-YKNs88UL.js";import"./ModalOverlay-BhtOmyBA.js";import"./x-XVyRqWEu.js";import"./createLucideIcon-BWu7CyXu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Heading-vsfnRndb.js";import"./info-DeAVHKcj.js";import"./Popover-Dmb00BHz.js";import"./check-DIRwVHcA.js";import"./useToggleState-D8972mtX.js";import"./TextFieldBase-CmU4q7IK.js";import"./Input-C28jpw0n.js";import"./useTextField-DFZmybEF.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CU7f01N4.js";import"./DragAndDrop-uF9CPU3C.js";import"./inertValue-WPNTVLgN.js";import"./useListState-8ZGjlVli.js";import"./TagGroup-CazzAJw2.js";import"./useHighlightSelectionDescription-BrCZJpfi.js";import"./useUpdateEffect-L__8C6WG.js";import"./useHasTabbableChild-Dwow-zm0.js";import"./chevron-down-CU59KFou.js";import"./Virtualizer-BVwfVw-k.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
