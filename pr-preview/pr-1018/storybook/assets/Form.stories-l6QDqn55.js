import{j as e}from"./iframe-CdnIBaQS.js";import{$ as c}from"./Form-B1aKtSg3.js";import{G as d}from"./Grid-aZX54oSo.js";import{G as i}from"./GridItem-B31zr_zY.js";import{T as t}from"./TextField-BRNTeOMh.js";import{S as l}from"./Select-Ccy_wjxs.js";import{B as a}from"./Button-DHAriHpj.js";import{R as x,a as u}from"./Radio-mtuteArd.js";import{C as I}from"./CheckboxGroup-CBdfspLy.js";import{C as G}from"./Checkbox-BQXjb4Sw.js";import{L as p}from"./ListBoxItem-FKSlFOFC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BGCpfP4A.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CiZggeAv.js";import"./useFocusRing-B26JkukS.js";import"./index-Bwdat55Z.js";import"./index-CjlGMBtV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-21Khe_R7.js";import"./TextField-CnipkgO0.js";import"./FieldError-BBRMXocd.js";import"./Text-63jd4RMf.js";import"./Text-C8pnIfab.js";import"./RSPContexts-BMRzhgaP.js";import"./Group-BIGFYESJ.js";import"./Input-BFIk-OJw.js";import"./Hidden-CJwsmdM9.js";import"./Button-BDoCnzr3.js";import"./useLabels-DTSKd8To.js";import"./useButton-Cggmn0OU.js";import"./useTextField-c3TrDSBf.js";import"./useControlledState-BEJy-MfI.js";import"./useField-B4Vh62Mt.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CythG5IS.js";import"./Dialog-m1tY80DB.js";import"./OverlayArrow-Cgr1kfwB.js";import"./useResizeObserver-G2Ku3nSv.js";import"./Collection-DoWuqJ9n.js";import"./index-m2mBe-xg.js";import"./Separator-C-WC961N.js";import"./SelectionManager--54cfGjY.js";import"./useEvent-BaBw_pLs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZfVsEb-.js";import"./useDescription-DeseOWEz.js";import"./ListKeyboardDelegate-DfcwVj2G.js";import"./PressResponder-D05sv4-3.js";import"./useLocalizedStringFormatter-Cr8jltsa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTM8Mo62.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-XS7clw.js";import"./x-DD461jHE.js";import"./createLucideIcon-KCWMli3b.js";import"./useLocalizedStringFormatter-CVE7y_HC.js";import"./Heading-CiOBs6Yz.js";import"./info-DzD3qv-_.js";import"./Popover-S04rwLpq.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DkY-0TAC.js";import"./DragAndDrop-BDMLCXTP.js";import"./inertValue-iGqYFqqc.js";import"./useListState-HW3C74U2.js";import"./Tag-Bdy6k7WU.js";import"./useHighlightSelectionDescription-C-K1tJlO.js";import"./useUpdateEffect-BhFdhiGD.js";import"./useHasTabbableChild-BnpHGzvY.js";import"./chevron-down-q2XeRW6C.js";import"./Button.module-Co5e5YHp.js";import"./check-DoYXfMZv.js";import"./useToggleState-Cnm_II5z.js";import"./Virtualizer-LyIsIBZX.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
