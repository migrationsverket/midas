import{j as e}from"./iframe-BJQY1bvJ.js";import{$ as c}from"./Form-CAdVlO2f.js";import{G as d}from"./Grid-CLrQaRaY.js";import{G as i}from"./GridItem-DRrp5q9n.js";import{a as x,R as u}from"./Radio-BuC5Q-Ch.js";import{C as I}from"./CheckboxGroup-C5OVVrgu.js";import{C as G}from"./Checkbox-BxICYtoY.js";import{T as t}from"./TextField-Bf9FlAcH.js";import{S as l}from"./Select-B5UGH0ch.js";import{L as p}from"./ListBoxItem-Mkb38YG_.js";import{B as a}from"./Button-BJZHHaN3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-lif94hNf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BsxZg-gF.js";import"./useFocusRing-BLqAyq6i.js";import"./index-tP79n4Xh.js";import"./index-IY5nP7ez.js";import"./clsx-Ciqy0D92.js";import"./Group-CyGCBoML.js";import"./FieldError-B56sTIqy.js";import"./Text-BNAvgz7D.js";import"./Text-DS3gleYA.js";import"./Button-tbssrMuS.js";import"./Hidden-DoOxpBOx.js";import"./useLabels-WB4c8N4J.js";import"./useButton-CsuJz0cJ.js";import"./SelectionIndicator-C_Pwu52k.js";import"./useField-DU--EPtB.js";import"./VisuallyHidden-DVVhBCOd.js";import"./useControlledState-C_pcrP7U.js";import"./Label-CR_CrvCp.js";import"./Dialog-Db7P49EB.js";import"./RSPContexts-CdLg8ZQ-.js";import"./OverlayArrow-3PnDCdtx.js";import"./useResizeObserver-DGBnzj2_.js";import"./Collection-DdWaMwwY.js";import"./index-AO2QVlWM.js";import"./Separator-CUwgFn1F.js";import"./SelectionManager-Dkp955FZ.js";import"./useEvent-CwuHowAX.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CCnP-Uo3.js";import"./ListKeyboardDelegate-BYmQaOVb.js";import"./PressResponder-Bxs7y7VP.js";import"./useLocalizedStringFormatter-BDBiLNys.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XkxXAZjC.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-md0iaidC.js";import"./createLucideIcon-BjfGBRzU.js";import"./useLocalizedStringFormatter-CsRXfCs5.js";import"./Heading-BaBUFL96.js";import"./info-CioFJ2A0.js";import"./Popover-DNH_fOYv.js";import"./check-Dopf3zVG.js";import"./useToggleState-CRuVgnLf.js";import"./TextFieldBase-DazdF0JE.js";import"./TextField-DN_FyFiN.js";import"./Input-B_66__ok.js";import"./useTextField-eFRejKJJ.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-NbL5XNA7.js";import"./DragAndDrop-DOBoE-rh.js";import"./inertValue-D8CFjVLD.js";import"./useListState-BP5BQ0CV.js";import"./Tag-CA8JHPzC.js";import"./useHighlightSelectionDescription-p-obloMy.js";import"./useUpdateEffect-DyBRU_UP.js";import"./useHasTabbableChild-Dl5WzB4c.js";import"./chevron-down-D3h0rdNH.js";import"./Virtualizer-DtcD72gm.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
