import{j as n}from"./iframe-BFWUK625.js";import{$ as j}from"./Form-i33VAmmX.js";import{G}from"./Grid-eAdVAQJ2.js";import{G as e}from"./GridItem-De_lgSqm.js";import{T as r}from"./TextField-D0nnk61f.js";import{S as I}from"./Select-DunJascV.js";import{B as a}from"./Button-CaVsQkFv.js";import{R as g,a as b}from"./Radio-G5csigUk.js";import{C as h}from"./CheckboxGroup-BPhoHNIS.js";import{C as k}from"./Checkbox-Cbfzqa3w.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Brg-wHrw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-snS7NZMN.js";import"./useFocusRing-CJar3c2A.js";import"./index-B75jU_X7.js";import"./index-Dra_gn4E.js";import"./TextFieldBase-xG_VrHDo.js";import"./TextField-BzCGNHZq.js";import"./FieldError-D37_phSB.js";import"./Text-B-okCbBe.js";import"./Text-BW-4VNNp.js";import"./ListKeyboardDelegate-Dk_IbTKd.js";import"./SelectionManager-BogtSliE.js";import"./useEvent-KXEMIh3t.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B5gLx0Un.js";import"./useDescription-DwtNcvho.js";import"./useControlledState-CzQh1LEr.js";import"./Group-DuoyMtrO.js";import"./Input-BEdtUBf8.js";import"./Hidden-AmvCo4gI.js";import"./Button-BONAnSTn.js";import"./useLabels-DBss7SBO.js";import"./useButton-Cifv2Bvt.js";import"./useTextField-BDAgTCB9.js";import"./useField-C-OMyNFf.js";import"./TextField.module-DjUItNl5.js";import"./Label-CSAlwImx.js";import"./Dialog-Bz8oRsc7.js";import"./RSPContexts-DEx4IZM4.js";import"./OverlayArrow-ZdcnnyqY.js";import"./useResizeObserver-DRsKMSAT.js";import"./Collection-CWpATs1Z.js";import"./index-qB3F7btM.js";import"./Separator-DEXl3vDQ.js";import"./PressResponder-C8Wz6q9n.js";import"./useLocalizedStringFormatter-Ba1EUQcz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DBsqBJNL.js";import"./Dialog-wxndwqYt.js";import"./useLocalizedStringFormatter-DHSDU4E_.js";import"./x-KIR2NjoA.js";import"./createLucideIcon-8pWnrCMq.js";import"./Heading-CQbAkMD6.js";import"./info-f9a1u4xm.js";import"./Tag-DvtBFjJ-.js";import"./ListBox-Ced3tYzO.js";import"./DragAndDrop-CTxFxa8M.js";import"./inertValue-DoH0Ct24.js";import"./useListState-CNBxRwjJ.js";import"./useHighlightSelectionDescription-CbvK1-eV.js";import"./useUpdateEffect-DAcr0akQ.js";import"./useHasTabbableChild-D4W5ZW52.js";import"./check-DqY-jbl1.js";import"./ListBoxSection-C-6vKlJF.js";import"./Virtualizer-CFJ_F5dg.js";import"./useObserveElement-CeSmDvAQ.js";import"./chevron-down-KDTpSd6U.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BZGDn2fo.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
