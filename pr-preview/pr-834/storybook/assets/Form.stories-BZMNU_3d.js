import{j as n}from"./iframe-DhoHp68Y.js";import{$ as j}from"./Form-DvieA5Fd.js";import{G}from"./Grid-DS7BDuYf.js";import{G as e}from"./GridItem-BRPILTHR.js";import{T as r}from"./TextField-3hgY42I-.js";import{S as I}from"./Select-BCI4g0IS.js";import{B as a}from"./Button-CRGLMEg1.js";import{R as g,a as b}from"./Radio-G9gNxHlb.js";import{C as h}from"./CheckboxGroup-nv3l_j1R.js";import{C as k}from"./Checkbox-C3WG2aD8.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D8Xn7Fmw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-PW1TQ82s.js";import"./useFocusRing-Hx48ZFtJ.js";import"./index-B1trEvWw.js";import"./index-D-9rK5fP.js";import"./TextFieldBase-BBck0IwM.js";import"./TextField-DEdA65iY.js";import"./FieldError-DmFvF02N.js";import"./Text-06IlRXOE.js";import"./Text-TV3OPHD5.js";import"./ListKeyboardDelegate-neHb2vXy.js";import"./SelectionManager-Cfdt_oAQ.js";import"./useEvent-B8QrBGp9.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BXm0IeTS.js";import"./useDescription-0QAHJHku.js";import"./useControlledState-BK7AGKp4.js";import"./Group-B84vMLNV.js";import"./Input-BdwnMDDs.js";import"./Hidden-DNHgI9-k.js";import"./Button-COP6933Q.js";import"./useLabels-DQuveOtk.js";import"./useButton-SyrpCuCl.js";import"./useTextField-CpNH4Ean.js";import"./useField-D0_0a68X.js";import"./TextField.module-DjUItNl5.js";import"./Label-BeTi4U9L.js";import"./Dialog-CKJ_2Lfe.js";import"./RSPContexts-DgxvACDt.js";import"./OverlayArrow-DbEIhVAH.js";import"./useResizeObserver-DT5ophQ3.js";import"./Collection-Cs7s1ldd.js";import"./index-9e3Pv-hx.js";import"./Separator-DaQaft9z.js";import"./PressResponder-DJKwonIX.js";import"./useLocalizedStringFormatter-BtrOfhB-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C1e_vhbH.js";import"./Dialog-Dj9fjniC.js";import"./useLocalizedStringFormatter-Bqw9aCW8.js";import"./x-BH929YBn.js";import"./createLucideIcon-BU_cIEJ8.js";import"./Heading-Bj3ay3k5.js";import"./info-CRsTm2hO.js";import"./Tag-Dmrgz5DM.js";import"./ListBox-DeHNUybr.js";import"./DragAndDrop-Cy8gsypG.js";import"./inertValue-CpzyXqHk.js";import"./useListState-Bmb-nNwA.js";import"./useHighlightSelectionDescription-5D3tbtJa.js";import"./useUpdateEffect-YFCzRW2m.js";import"./useHasTabbableChild-_Z1NH3Jb.js";import"./check-sQxigBlL.js";import"./ListBoxSection-CDH8P2Qq.js";import"./Virtualizer-DOLquKP9.js";import"./useObserveElement-Ce7PXQup.js";import"./chevron-down-D9brR6uy.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B5FuN3uK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
