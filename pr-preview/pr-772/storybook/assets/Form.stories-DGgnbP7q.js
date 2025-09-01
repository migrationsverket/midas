import{j as n}from"./iframe-a6T_oqXD.js";import{$ as j}from"./Form-Dqp9uChO.js";import{G}from"./Grid-BnX3UGo3.js";import{G as e}from"./GridItem-4SfovYrA.js";import{T as r}from"./TextField-C3V2R59s.js";import{S as I}from"./Select-l6vHHqtY.js";import{B as a}from"./Button-s5wz6aIz.js";import{R as g,a as b}from"./Radio-CixhoHxz.js";import{C as h}from"./CheckboxGroup-D5MovEXp.js";import{C as k}from"./Checkbox-WOT8PLRn.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-3JRhMg6v.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C36csiMG.js";import"./useFocusRing-D9UmzkvQ.js";import"./index-udwCI9Pl.js";import"./index-D2lsOTij.js";import"./TextFieldBase-DuIxGglN.js";import"./TextField-Dmyu_rRD.js";import"./FieldError-BgnpDbm1.js";import"./Text-C2GHvdRv.js";import"./Text-DCSy4ZS2.js";import"./ListKeyboardDelegate-CJXe-5T0.js";import"./SelectionManager-Cy8g9VEB.js";import"./useEvent-BKtueyb-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Bqe3is0l.js";import"./useDescription-C2S07-0U.js";import"./useControlledState-VZ7Bh5gE.js";import"./Group-DY9UebcV.js";import"./Input-Cjl5W8nR.js";import"./Hidden-DDaNTZ5x.js";import"./Button-CF_9qHfr.js";import"./useLabels-ClrvcWOH.js";import"./useButton-DBhLoHRp.js";import"./useTextField-CU6ggm9g.js";import"./useField-CvAnmG_Z.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BBWU9AYc.js";import"./Dialog-DXRj2-nw.js";import"./RSPContexts-DFoa7Jzb.js";import"./OverlayArrow-fOrSUBGP.js";import"./useResizeObserver-aH0coZzU.js";import"./Collection-VBlmRWNR.js";import"./index-BQYhuc0k.js";import"./Separator-BRiqCdR7.js";import"./PressResponder-Cnetkutk.js";import"./useLocalizedStringFormatter-rFQB-ZdO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-u-Aixy2B.js";import"./Dialog-DFhBg7Q_.js";import"./useLocalizedStringFormatter-DZMQgG9z.js";import"./x-EQqVegys.js";import"./createLucideIcon-CMRMaV3n.js";import"./Heading-7uoLD9AK.js";import"./info-CDOj_wea.js";import"./Tag-Pevu8ngU.js";import"./ListBox-B1jx-fUu.js";import"./DragAndDrop-CXcSmUJ3.js";import"./inertValue-L8Bd10Ev.js";import"./useListState-C9ezzVuh.js";import"./useHighlightSelectionDescription-DbWdbOkX.js";import"./useUpdateEffect-omy8YHuv.js";import"./useHasTabbableChild-D28lo_Np.js";import"./check-Boxg65RM.js";import"./ListBoxSection-D_akLMp0.js";import"./Virtualizer-Ba27sSbV.js";import"./useObserveElement-DsJfJ_Ox.js";import"./chevron-down-Dju3ilWU.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-Ck4WEpNB.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
