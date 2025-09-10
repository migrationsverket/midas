import{j as n}from"./iframe-15uHx6jG.js";import{$ as j}from"./Form-UNDC-r4D.js";import{G}from"./Grid-dy4-HEyG.js";import{G as e}from"./GridItem-CTN7ncbn.js";import{T as r}from"./TextField-DSNejdte.js";import{S as I}from"./Select-DM6TG4BK.js";import{B as a}from"./Button-eCQBM9xW.js";import{R as g,a as b}from"./Radio-CJu0cq_v.js";import{C as h}from"./CheckboxGroup-BcLyvpet.js";import{C as k}from"./Checkbox-tajrPXxW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-G0NazBgU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BpcYbTWt.js";import"./useFocusRing-DqZTxRPt.js";import"./index-B0iXMVmW.js";import"./index-Cpykslap.js";import"./TextFieldBase-vS_jW1HK.js";import"./TextField-CDL23FeD.js";import"./FieldError-Bx6UQ-Kz.js";import"./Text-Brn77Wkl.js";import"./Text-BJyTRwkO.js";import"./ListKeyboardDelegate-PHymW5Dd.js";import"./SelectionManager-BH2TngR9.js";import"./useEvent-DDx_sdhm.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-7suesREs.js";import"./useDescription-Dl3Irc7y.js";import"./useControlledState-BhULkshX.js";import"./Group-4hRvV59v.js";import"./Input-B5JXl7ty.js";import"./Hidden-Bo96X54I.js";import"./Button-BQU4byHL.js";import"./useLabels-DyztXmTo.js";import"./useButton-Cdqk7B7Z.js";import"./useTextField-DSzcUFdt.js";import"./useField-Dd6Nd37e.js";import"./TextField.module-8oYDuXgF.js";import"./Label-Y60g7iCl.js";import"./Dialog-Dw2icNrp.js";import"./RSPContexts-DEDLZDXz.js";import"./OverlayArrow-CrVmGv_E.js";import"./useResizeObserver-BXojXiaL.js";import"./Collection-CSPVpcm8.js";import"./index-U-DescLT.js";import"./Separator-BEXvYr4T.js";import"./PressResponder-OIQ5qB9W.js";import"./useLocalizedStringFormatter-Dw6YaPHd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DWX39oFj.js";import"./Dialog-DvRyXUwn.js";import"./useLocalizedStringFormatter-4Srs-NGC.js";import"./x-CNuFKPAi.js";import"./createLucideIcon-BrDQsNMZ.js";import"./Heading-BK9eo9CF.js";import"./info-BtNqvpCl.js";import"./Tag-DMzKLA0d.js";import"./ListBox-Cr405nvq.js";import"./DragAndDrop-s_H-nvmN.js";import"./inertValue-BruhlNov.js";import"./useListState-DB_V4HSV.js";import"./useHighlightSelectionDescription-DyU8lIBp.js";import"./useUpdateEffect-BHTPNvf8.js";import"./useHasTabbableChild-DaCce8OC.js";import"./check-Da5Oomd2.js";import"./ListBoxSection-BC1_bZG9.js";import"./Virtualizer-CiSvwanM.js";import"./useObserveElement-CFKv6JPM.js";import"./chevron-down-JA0YyBCm.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-CewbWhRy.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
