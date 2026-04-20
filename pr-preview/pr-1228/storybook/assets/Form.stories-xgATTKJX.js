import{j as e}from"./iframe-SiFgIgtO.js";import{c}from"./Form-DgSr2KFi.js";import{G as d}from"./Grid-RG7mUJxS.js";import{G as i}from"./GridItem-BFrqPWXN.js";import{a as x,R as u}from"./Radio-Cf6vpR6G.js";import{C as I}from"./CheckboxGroup-W3j58X7m.js";import{C as G}from"./Checkbox-L3SyxwzM.js";import{T as t}from"./TextField-BZDkJZ4d.js";import{S as l}from"./Select-Lj5A8zSR.js";import{L as p}from"./ListBoxItem-DcnYr1ZC.js";import{B as a}from"./Button-DBG0-mK7.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CvkTALop.js";import"./utils-o2Exi7SE.js";import"./clsx-B-dksMZM.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./clsx-Ciqy0D92.js";import"./Group-DicU3rN6.js";import"./FieldError-BG5wZCkL.js";import"./Text-iLvdh7Qr.js";import"./Text-JI0YDy3v.js";import"./Button-CIm-1svz.js";import"./Hidden-BczPpR5h.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./SelectionIndicator-DqtZUbAc.js";import"./useField-BB23bqGH.js";import"./VisuallyHidden-DrRKsR6_.js";import"./useControlledState-BeznzCuJ.js";import"./Label-BNEmB3Xe.js";import"./Dialog-Bu_l7-7u.js";import"./RSPContexts-DM50IAXa.js";import"./OverlayArrow-BhzBKVp0.js";import"./useResizeObserver-D6ZMDOal.js";import"./Collection-BRYmqSyD.js";import"./index-Dr-4T4ok.js";import"./Separator-CUZnQx8o.js";import"./SelectionManager-B4l6dhqq.js";import"./useEvent-DvWnSKUG.js";import"./scrollIntoView-bZNhA6RN.js";import"./useDescription-CU7ZHwK3.js";import"./ListKeyboardDelegate-Cal3wDht.js";import"./PressResponder-DyUOWdpm.js";import"./useLocalizedStringFormatter-BSIB72Kk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CQnJNJ3d.js";import"./getScrollParent-BdyvFVIS.js";import"./ModalOverlay-DJW7SImS.js";import"./x-ijd7sG5_.js";import"./createLucideIcon-jPk5qvos.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./Heading-CsY9bpyS.js";import"./info-CP20CBG7.js";import"./Popover-C8oeG9U6.js";import"./check-Cg2VzzCN.js";import"./useToggleState-BFaaa6V4.js";import"./TextFieldBase-B3pBOzuv.js";import"./Input-Dj69D4Wg.js";import"./useTextField-BMD9JipH.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DfWnxGvI.js";import"./DragAndDrop-s4cuduJD.js";import"./inertValue-BJGhfjjq.js";import"./useListState-DmpFxQwK.js";import"./TagGroup-Bjkk4Ymn.js";import"./useHighlightSelectionDescription-61Uub9U6.js";import"./useUpdateEffect--C_tgNEG.js";import"./useHasTabbableChild-Bgpd9a9K.js";import"./chevron-down-BVPg0XWG.js";import"./Virtualizer-NYLm6Wxm.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
