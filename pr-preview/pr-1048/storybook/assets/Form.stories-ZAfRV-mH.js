import{j as e}from"./iframe-CgeuBGg3.js";import{$ as c}from"./Form-OezuEZAr.js";import{G as d}from"./Grid-AiY2ys0B.js";import{G as i}from"./GridItem-Ca-mtU3R.js";import{a as x,R as u}from"./Radio-Bn3kG6zO.js";import{C as I}from"./CheckboxGroup-DG9yECqi.js";import{C as G}from"./Checkbox-BJMBKVVB.js";import{T as t}from"./TextField-Du6eiROd.js";import{S as l}from"./Select-BYUeBk-b.js";import{L as p}from"./ListBoxItem-Ba2GbMQv.js";import{B as a}from"./Button-B3bHm7yN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5ZiOk7c.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B3OZSiFR.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./clsx-Ciqy0D92.js";import"./Group-Bv2uZEGN.js";import"./FieldError-Ck8WwPsT.js";import"./Text-BY_Jfm-B.js";import"./Text-cOijWBlA.js";import"./Button-D49K8NN3.js";import"./Hidden-BuqiSPlJ.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./SelectionIndicator-B5iuuJYR.js";import"./useField-CrURjpqd.js";import"./VisuallyHidden-nAkuDexq.js";import"./useControlledState-hrYI1rS_.js";import"./Label-BWAkX44E.js";import"./Dialog-CTdZ_zB9.js";import"./RSPContexts-Cmp2aHI0.js";import"./OverlayArrow-BMo0uLg8.js";import"./useResizeObserver-BObk-iBp.js";import"./Collection-C0rNIg_w.js";import"./index-xz0YMXZu.js";import"./Separator-ZaBb-Xpb.js";import"./SelectionManager-FueJVEvO.js";import"./useEvent-DfWlG2fS.js";import"./scrollIntoView-BOtoWgvj.js";import"./useDescription-FPRM_do-.js";import"./ListKeyboardDelegate-BJowuom4.js";import"./PressResponder-CObnC5EZ.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-60pw6fU8.js";import"./getScrollParent-BZNtwC6u.js";import"./x-82ZwNPo6.js";import"./createLucideIcon-j5uHxTIE.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./Heading-BxH2CNNp.js";import"./info-BukTWBXk.js";import"./Popover-Bu8jD-RO.js";import"./check-BrJWqDvS.js";import"./useToggleState-BkXl4epD.js";import"./TextFieldBase-C88gJedG.js";import"./Input-DUWQJdsC.js";import"./useTextField-CR5nipmw.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-XljtbhP2.js";import"./DragAndDrop-B5XOYRSn.js";import"./inertValue-Deeqg3Fo.js";import"./useListState-D7TX0nGo.js";import"./TagGroup-C-VDNBux.js";import"./useHighlightSelectionDescription-CgvhJDr-.js";import"./useUpdateEffect-D3Eg3csO.js";import"./useHasTabbableChild-BqnzUrJ_.js";import"./chevron-down-Y08zg6Jn.js";import"./Virtualizer-uRRKW8Fb.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
