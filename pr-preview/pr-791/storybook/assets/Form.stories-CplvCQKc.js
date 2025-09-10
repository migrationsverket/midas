import{j as n}from"./iframe-BDiSYqWa.js";import{$ as j}from"./Form-5bp0yKn-.js";import{G}from"./Grid-AVX3cvYM.js";import{G as e}from"./GridItem-BcRYtihy.js";import{T as r}from"./TextField-VoIMleAY.js";import{S as I}from"./Select-PsofHPXS.js";import{B as a}from"./Button-CnaoE-Gj.js";import{R as g,a as b}from"./Radio-BVFSVDjW.js";import{C as h}from"./CheckboxGroup-DDwPL36S.js";import{C as k}from"./Checkbox-DSIb2urY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CO5MdmEy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BzpRRXd4.js";import"./useFocusRing-DZ7IlmNH.js";import"./index-BYGOKdO1.js";import"./index-CO0HMSST.js";import"./TextFieldBase-DZuUuuKb.js";import"./TextField-CKXkNc4c.js";import"./FieldError-DGCAGZDe.js";import"./Text-C7NY9qCG.js";import"./Text-CnliDubZ.js";import"./ListKeyboardDelegate-CMSZKBp1.js";import"./SelectionManager-3aWiusbN.js";import"./useEvent-BPQDxN8u.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BWztqHRS.js";import"./useDescription-CM6zdGeZ.js";import"./useControlledState-kAfKWxqJ.js";import"./Group-Bqt0HWnp.js";import"./Input-5S0JPiep.js";import"./Hidden-D0MiqXkm.js";import"./Button-DFB9myAt.js";import"./useLabels-CKWz2zK7.js";import"./useButton-Cv89yN8O.js";import"./useTextField-DtKVbnrA.js";import"./useField-whv8fZRX.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BD1Fa2Dt.js";import"./Dialog-lU4q859i.js";import"./RSPContexts-BoVj7ltD.js";import"./OverlayArrow-DJ8MQqqX.js";import"./useResizeObserver-HR_a4kik.js";import"./Collection-oWPJf8wj.js";import"./index-UDfXmwsK.js";import"./Separator-BG8Scg9i.js";import"./PressResponder-BSVTe01x.js";import"./useLocalizedStringFormatter-CFSWvlK1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-MP5AzyPd.js";import"./Dialog-oXjl790Q.js";import"./useLocalizedStringFormatter-BadqS1cQ.js";import"./x-BKZE0X1R.js";import"./createLucideIcon-BVXiUt89.js";import"./Heading-BYX0rGG1.js";import"./info-BM1ADJKl.js";import"./Tag-5DS85A6T.js";import"./ListBox-Bc8gFNz-.js";import"./DragAndDrop-I5xkkIAi.js";import"./inertValue-B8-hMONJ.js";import"./useListState-DXIdMoQc.js";import"./useHighlightSelectionDescription-MNMBF2Er.js";import"./useUpdateEffect-P0u_Brdi.js";import"./useHasTabbableChild-DN3-qdOW.js";import"./check-IrdatMhB.js";import"./ListBoxSection-Ds3Wrcpk.js";import"./Virtualizer-PeXO7biy.js";import"./useObserveElement-62z8QiLe.js";import"./chevron-down-D-kuNXVJ.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-C9XL6mvW.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
