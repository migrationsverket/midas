import{j as n}from"./iframe-CG9VKUP8.js";import{$ as j}from"./Form-D535f8V0.js";import{G}from"./Grid-CNoARi0A.js";import{G as e}from"./GridItem-7beOGwUa.js";import{T as r}from"./TextField-Cfp4y8yb.js";import{S as I}from"./Select-BycxU9hP.js";import{B as a}from"./Button-CvDiy1-H.js";import{R as g,a as b}from"./Radio-DpvvRCg1.js";import{C as h}from"./CheckboxGroup-BCXUsLex.js";import{C as k}from"./Checkbox-Bauv5Ved.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-cxZgmyV_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-3lbbOQzT.js";import"./useFocusRing-Dv_A7Af5.js";import"./index-CNe5RKlf.js";import"./index-qZFMP_vd.js";import"./TextFieldBase-Cc-5F0PJ.js";import"./TextField-H3UBdUUr.js";import"./FieldError-DQuVbovJ.js";import"./Text-Dp5VdET0.js";import"./Text-DR05mKGN.js";import"./ListKeyboardDelegate-d5GFIIvJ.js";import"./SelectionManager-CHu2Abe8.js";import"./useEvent-Cvz4X-cL.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DTKturx6.js";import"./useDescription-Du-qZ7zA.js";import"./useControlledState-DV3t9z-p.js";import"./Group-K9I8RZQm.js";import"./Input-CAVlFpBd.js";import"./Hidden-CxkJD6gc.js";import"./Button-C3yK5rIv.js";import"./useLabels-BiMC9erz.js";import"./useButton-ChMLR1jf.js";import"./useTextField-CXwRG3c4.js";import"./useField-CyMsbwtv.js";import"./TextField.module-DjUItNl5.js";import"./Label-DmnhtaQ4.js";import"./Dialog-kFIBEL00.js";import"./RSPContexts-D9IVAU5L.js";import"./OverlayArrow-LmSW_Lao.js";import"./useResizeObserver-DsfsZwfc.js";import"./Collection-l2OeyB1k.js";import"./index-ZPZJutdW.js";import"./Separator-BKSmEHii.js";import"./PressResponder-Ba-t5Sk_.js";import"./useLocalizedStringFormatter-CGap7KQM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DpD6dKai.js";import"./Dialog-CvmggiqO.js";import"./useLocalizedStringFormatter-ODzaxbmN.js";import"./x-C607IRae.js";import"./createLucideIcon-B3y3-98R.js";import"./Heading-yi85ESfF.js";import"./info-D6jMipGf.js";import"./Tag-b_77WHiR.js";import"./ListBox-CAcmgDWJ.js";import"./DragAndDrop-BdvJgvah.js";import"./inertValue-BOxzTtb7.js";import"./useListState-BawFbHEa.js";import"./useHighlightSelectionDescription-BPqpMvk3.js";import"./useUpdateEffect-DqNpJCSW.js";import"./useHasTabbableChild-D51m2eQH.js";import"./check-CMu3UgmL.js";import"./ListBoxSection-BEKKkxoQ.js";import"./Virtualizer-DdOIoSFr.js";import"./useObserveElement-DcsOpeST.js";import"./chevron-down-S0IFkhwZ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-r6gYTWRU.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
