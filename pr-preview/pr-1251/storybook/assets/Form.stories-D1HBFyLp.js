import{j as e}from"./iframe-XiCiIf0n.js";import{c}from"./Form-C0m5f7h4.js";import{G as d}from"./Grid-Bwms_lu1.js";import{G as i}from"./GridItem-DPbxPMDM.js";import{a as x,R as u}from"./Radio-xwf5Xdp2.js";import{C as I}from"./CheckboxGroup-DUluAclO.js";import{C as G}from"./Checkbox-BBTo2bZJ.js";import{T as t}from"./TextField-Cylb9xUz.js";import{S as l}from"./Select-VKxBcJTj.js";import{L as p}from"./ListBoxItem-CJzVs09Z.js";import{B as a}from"./Button-34yPA4wA.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Du04ckjJ.js";import"./utils-DN6l_A4f.js";import"./clsx-B-dksMZM.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./clsx-Ciqy0D92.js";import"./Group-kVlQGyc6.js";import"./FieldError-BphdTUoK.js";import"./Text-BgntJj64.js";import"./Text-BB__0TpL.js";import"./Button-GBAKwEXf.js";import"./Hidden-B0NT9U_h.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./SelectionIndicator-zplcTWxq.js";import"./useField-COsFSqdw.js";import"./VisuallyHidden-D8kosd8O.js";import"./useControlledState-CUbneG8a.js";import"./Label-DGFBbDo_.js";import"./Dialog-vO0AIOir.js";import"./RSPContexts-DA4QYsro.js";import"./OverlayArrow-Bc8m4xfE.js";import"./useResizeObserver-jOGmv4td.js";import"./Collection-BXkkuLNi.js";import"./index-ChQWbGkq.js";import"./Separator-UcUuddN2.js";import"./SelectionManager-DJe5Oihj.js";import"./useEvent-Byt7kt62.js";import"./scrollIntoView-CPg7R5H1.js";import"./useDescription-D3XmSikn.js";import"./ListKeyboardDelegate-DwhOIuZ9.js";import"./PressResponder-3MamZval.js";import"./useLocalizedStringFormatter-D4lkYHou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DS5_9QGV.js";import"./getScrollParent-Bk9-lSDZ.js";import"./ModalOverlay-BdBiBzCh.js";import"./x-AkXMb_P6.js";import"./createLucideIcon-Bi0GkdZT.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./Heading-CrR6P3Ih.js";import"./info-ChSmfyLx.js";import"./Popover-DpMwRH-x.js";import"./check-DFUg_1Yn.js";import"./useToggleState-CMN4XFli.js";import"./TextFieldBase-C2EjtKAd.js";import"./Input-DJd9mlfc.js";import"./useTextField-VxkvG0Xu.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DKpMlgsw.js";import"./DragAndDrop-DQb_6GR3.js";import"./inertValue-DEst55-O.js";import"./useListState-BNn152UX.js";import"./TagGroup-Dl6Er-bf.js";import"./useHighlightSelectionDescription-Az0EcfF4.js";import"./useUpdateEffect-Dtfj_Yt8.js";import"./useHasTabbableChild-DuXmXkw6.js";import"./chevron-down-BxWeFkoH.js";import"./Virtualizer-D7h3m6s0.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
