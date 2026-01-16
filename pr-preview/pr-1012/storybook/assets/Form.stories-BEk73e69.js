import{j as e}from"./iframe-C-bTQS5b.js";import{$ as c}from"./Form-DyfKXbQx.js";import{G as d}from"./Grid-DqCojbgu.js";import{G as i}from"./GridItem-DgoDYFVe.js";import{T as t}from"./TextField-CFkRszAn.js";import{S as l}from"./Select-dMCI0sxc.js";import{B as a}from"./Button-DUHsSslZ.js";import{R as x,a as u}from"./Radio-DSiSQcRT.js";import{C as I}from"./CheckboxGroup-DQ3gJaNN.js";import{C as G}from"./Checkbox-Coa1S0s3.js";import{L as p}from"./ListBoxItem-VsArxvdg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BN4n3pVV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BEi1mUsa.js";import"./useFocusRing-CnEIlzX4.js";import"./index-0H14NhtQ.js";import"./index-Cdo4-yyt.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Bnb71XaA.js";import"./TextField-BB4B8ySD.js";import"./FieldError-C20ZhlYT.js";import"./Text-Bor6iAR0.js";import"./Text-jh07sOT3.js";import"./RSPContexts-Dzh2LgXf.js";import"./Group-CwzsM6BS.js";import"./Input-DN322aqy.js";import"./Hidden-Cyhjgpq-.js";import"./Button-BaZzqN3-.js";import"./useLabels-BAE89oEy.js";import"./useButton-DzG_bmRJ.js";import"./useTextField-BejlpbaL.js";import"./useControlledState-De-wF9dR.js";import"./useField-DTo9M87M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DavlJIZx.js";import"./Dialog-CpV7l1oB.js";import"./OverlayArrow-AcCh0_2A.js";import"./useResizeObserver-DSNbTo1E.js";import"./Collection-DJupDp9-.js";import"./index-B-jpAc1r.js";import"./Separator-CV1a4Byn.js";import"./SelectionManager-PaMbHRLL.js";import"./useEvent-zzI8eDEU.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YJhM_483.js";import"./useDescription-CP6yOtdD.js";import"./ListKeyboardDelegate-CQZdD3fG.js";import"./PressResponder-BNQ1tNC7.js";import"./useLocalizedStringFormatter-fekdwmGJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DgWtZEj0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRZO2hdA.js";import"./x-CIXfz7i3.js";import"./createLucideIcon-DAQi76Bv.js";import"./useLocalizedStringFormatter-C_i8rKrL.js";import"./Heading-CSE4Iek0.js";import"./info-cOXElt1d.js";import"./Popover-BXMWwqlC.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BrK4IxTj.js";import"./DragAndDrop-Ckce7wkc.js";import"./inertValue-DAfLYJCK.js";import"./useListState-C0pyRXCF.js";import"./Tag-DjCXd4Lx.js";import"./useHighlightSelectionDescription-BufeKrFK.js";import"./useUpdateEffect-B9anftim.js";import"./useHasTabbableChild-CW39IuMI.js";import"./chevron-down-DG99EzGk.js";import"./Button.module-Co5e5YHp.js";import"./check-SH_rp_M-.js";import"./useToggleState-CCWqp-k7.js";import"./Virtualizer-YMGx2e5R.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
