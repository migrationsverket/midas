import{j as e}from"./iframe-ByNEmIOU.js";import{$ as c}from"./Form-DTzydRAf.js";import{G as d}from"./Grid-eReTsNPP.js";import{G as i}from"./GridItem-DSCQN79L.js";import{T as t}from"./TextField-CpaFpXAf.js";import{S as l}from"./Select-vVCCr-_P.js";import{B as a}from"./Button-BZj1eUaG.js";import{R as x,a as u}from"./Radio-DEMWJnTp.js";import{C as I}from"./CheckboxGroup-BoBreaAI.js";import{C as G}from"./Checkbox-xwRym-Gb.js";import{L as p}from"./ListBoxItem-_TBpC5Tm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DTOyoAZG.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-HiFPBIvf.js";import"./useFocusRing-CytbFWM3.js";import"./index-DBfj5PxR.js";import"./index-CGNcjuez.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-GelWT8wB.js";import"./TextField-CkHj93nW.js";import"./FieldError-3BzwtZU_.js";import"./Text-BNZ-1xk8.js";import"./Text-D_4I_8jd.js";import"./RSPContexts-BsQr0774.js";import"./Group--mVlG6gQ.js";import"./Input-UneXnYHn.js";import"./Hidden-D8ivFDCG.js";import"./Button-CZ3GNczv.js";import"./useLabels-lfHEtpRl.js";import"./useButton-DMFyreMT.js";import"./useTextField-DFgnAszA.js";import"./useControlledState-BenzJtep.js";import"./useField-zV-3UPg2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D1vIF0mY.js";import"./Dialog-rhS8pjjc.js";import"./OverlayArrow-Cdo_-urs.js";import"./useResizeObserver-BvWv9OXJ.js";import"./Collection-ZYN-xnvk.js";import"./index-8PBKq18y.js";import"./Separator-Bo1xWXSP.js";import"./SelectionManager-Dc_WBs_T.js";import"./useEvent-C5ByhIa5.js";import"./scrollIntoView-BsCZGpGi.js";import"./SelectionIndicator-3-Vz_rSI.js";import"./useDescription-BQ4qbpcd.js";import"./ListKeyboardDelegate-C1GO73cs.js";import"./PressResponder-CkYRdWz_.js";import"./useLocalizedStringFormatter-YRte3exA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DTrxB9eS.js";import"./VisuallyHidden-B2loE3ZQ.js";import"./x-BC2uLgth.js";import"./createLucideIcon-HuBhSAyF.js";import"./useLocalizedStringFormatter-WWUimbhC.js";import"./Heading-B9sYL-oJ.js";import"./info-BJwkolSj.js";import"./Popover-XMptSfTl.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-FcPwfJqT.js";import"./DragAndDrop-iY4tdPiz.js";import"./inertValue-CujIPkVV.js";import"./useListState-BJwOD09s.js";import"./Tag-C1zuDaB_.js";import"./useHighlightSelectionDescription-B4JXNIu5.js";import"./useUpdateEffect-BEuiqXbu.js";import"./useHasTabbableChild-DwsuQGVy.js";import"./chevron-down-CIX070IC.js";import"./Button.module-Co5e5YHp.js";import"./check-B1Yr3h9i.js";import"./useToggleState-BoLiy2gX.js";import"./Virtualizer-B6fuAr5l.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
