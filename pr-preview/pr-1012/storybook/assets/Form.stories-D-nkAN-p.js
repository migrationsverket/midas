import{j as e}from"./iframe-BqxXwJvW.js";import{$ as c}from"./Form-8dObOJRH.js";import{G as d}from"./Grid-m4oO75Tk.js";import{G as i}from"./GridItem-BGeRbsLa.js";import{T as t}from"./TextField-CVzQIp_P.js";import{S as l}from"./Select-C7jBNFMR.js";import{B as a}from"./Button-CY_lcceX.js";import{R as x,a as u}from"./Radio-CNAdWLk4.js";import{C as I}from"./CheckboxGroup-CMskkkVb.js";import{C as G}from"./Checkbox-D16svwRh.js";import{L as p}from"./ListBoxItem-BinTaTlx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-LUwfNM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B5-yItUz.js";import"./useFocusRing-DRB9GHUu.js";import"./index-DaPmNw3z.js";import"./index-DnASvcrD.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CepB7X7q.js";import"./TextField-Ae-iUmAy.js";import"./FieldError-BJ23uTJc.js";import"./Text-POKFtH9S.js";import"./Text-CN0Rba2k.js";import"./RSPContexts-B2PTEsUQ.js";import"./Group-DwOB3Gfp.js";import"./Input-DLsOwb3b.js";import"./Hidden-Bzkr_wjp.js";import"./Button-C0pllIm8.js";import"./useLabels-DQzS7WhL.js";import"./useButton-Cj_RDJUs.js";import"./useTextField-BV3Nt8ev.js";import"./useControlledState-DGI1N2va.js";import"./useField-DwRopjyw.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-U4M1Zv0j.js";import"./Dialog-bORBCgW2.js";import"./OverlayArrow-CCvd9rNx.js";import"./useResizeObserver-CEFin7z6.js";import"./Collection-WRVPAV2J.js";import"./index-DSlMsjV2.js";import"./Separator-C0uBNAbQ.js";import"./SelectionManager-B8Rp-4Hs.js";import"./useEvent-BnnUnxNN.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-815jzngV.js";import"./useDescription-BoAi9bEV.js";import"./ListKeyboardDelegate-m7or5xuQ.js";import"./PressResponder-BMuPjytM.js";import"./useLocalizedStringFormatter-CfrYnOvZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_avnMiF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQls1uVt.js";import"./x-BelE39Lb.js";import"./createLucideIcon-DAQszgUd.js";import"./useLocalizedStringFormatter-C4Z7JSsl.js";import"./Heading-DX1KZl86.js";import"./info-BGDq0Gmh.js";import"./Popover-Cq1Xp21Q.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BEcDA9J3.js";import"./DragAndDrop-CB7Yk8ib.js";import"./inertValue-C1REkDAH.js";import"./useListState-BUhgN6P3.js";import"./Tag-Btx-88XJ.js";import"./useHighlightSelectionDescription-BouMhaiy.js";import"./useUpdateEffect-Cq1M1G5e.js";import"./useHasTabbableChild-DkxhhUvb.js";import"./chevron-down-DKuYJ1an.js";import"./Button.module-Co5e5YHp.js";import"./check-BRqTaETN.js";import"./useToggleState-BkYrVx-b.js";import"./Virtualizer-CKVZOD3u.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
