import{j as e}from"./iframe-Ft30p-9G.js";import{c}from"./Form-Bj-ULx6B.js";import{G as d}from"./Grid-D_GEjyJn.js";import{G as i}from"./GridItem-jAJ-iXKe.js";import{a as x,R as u}from"./Radio-Btdt2AeM.js";import{C as I}from"./CheckboxGroup-Q2mpHISu.js";import{C as G}from"./Checkbox-CFUzcWP8.js";import{T as t}from"./TextField-BSLYf7l1.js";import{S as l}from"./Select-BU1tM2Pi.js";import{L as p}from"./ListBoxItem-CRChmGn6.js";import{B as a}from"./Button-CEZ1lvwe.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Daa2jsSP.js";import"./utils-9foVijX8.js";import"./clsx-B-dksMZM.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./clsx-Ciqy0D92.js";import"./Group-w47T-z_V.js";import"./FieldError-DXrI8o23.js";import"./Text-FkyfMeaB.js";import"./Text-C3E5lXGF.js";import"./Button-C-EJ5lIE.js";import"./Hidden-BvmG-LpB.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./SelectionIndicator-CvaKVrwY.js";import"./useField-DK19wDNW.js";import"./VisuallyHidden-BmzQFOM6.js";import"./useControlledState-BoeB8-LH.js";import"./Label-Cuxethf6.js";import"./Dialog-DU3hHvhP.js";import"./RSPContexts-c5guVd-d.js";import"./OverlayArrow-DgIPD6IU.js";import"./useResizeObserver-74yGwHpi.js";import"./Collection-B5Vl67r5.js";import"./index-DG6iaBfL.js";import"./Separator-C8tqssik.js";import"./SelectionManager-BCfuDrZc.js";import"./useEvent-D1GkMq6I.js";import"./scrollIntoView-DnLyLCcJ.js";import"./useDescription-Bw7Qhe2x.js";import"./ListKeyboardDelegate-M7dQ7t4z.js";import"./PressResponder-C7gwAmKP.js";import"./useLocalizedStringFormatter-Bn-aGXyh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CIQK1dvP.js";import"./getScrollParent-D-S2JtE9.js";import"./ModalOverlay-CbheC8C0.js";import"./x-DG1ChVHS.js";import"./createLucideIcon-D4F6iW4h.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./Heading-ghBbGpaI.js";import"./info-CjNMAkzt.js";import"./Popover-qU36_nDU.js";import"./check-B7eSI78P.js";import"./useToggleState-nxDL7cn9.js";import"./TextFieldBase-CiXx5F7Z.js";import"./Input-BGurIZni.js";import"./useTextField-BN-yaNMF.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CSfiptut.js";import"./DragAndDrop-DypFwdt4.js";import"./inertValue-BNWBwaOP.js";import"./useListState-BX2V7eVQ.js";import"./TagGroup-DNTDPhT9.js";import"./useHighlightSelectionDescription-CirQ6mqa.js";import"./useUpdateEffect-CH1GfMA0.js";import"./useHasTabbableChild-BRGz9Llt.js";import"./chevron-down-BEs-QKxl.js";import"./Virtualizer-J4rRtEm2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
